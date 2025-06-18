const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Production = require("../models/Production");
const router = express.Router();

// SETUP MULTER for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/production";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// Create Production Project
router.post("/", upload.array("images", 10), async (req, res) => {
  const { title } = req.body;
  const imagePaths = req.files.map((file) => `/uploads/production/${file.filename}`);
  const newProject = new Production({ title, images: imagePaths });
  await newProject.save();
  res.status(201).json(newProject);
});

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Production.find().sort({ createdAt: -1 });
  res.json(projects);
});

// Delete project
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await Production.findById(id);
  if (!project) return res.status(404).send("Not found");

  // Delete files from server
  project.images.forEach((imgPath) => {
    const filePath = path.join(__dirname, "..", imgPath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  });

  await project.deleteOne();
  res.sendStatus(200);
});

module.exports = router;
