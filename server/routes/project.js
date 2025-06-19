const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// POST /api/projects - Add a new project
router.post("/", async (req, res) => {
  try {
    const { swiper, iframe, title, category, behanceUrl } = req.body; // ✅ include behanceUrl
    const project = new Project({ swiper, iframe, title, category, behanceUrl }); // ✅ pass it here
    await project.save();
    res.status(201).json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
// GET /api/projects?swiper=booths
router.get("/", async (req, res) => {
  try {
    const filter = req.query.swiper ? { swiper: req.query.swiper } : {};
    const projects = await Project.find(filter).sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE /api/projects/:id - Delete a project by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }
    res.json({ success: true, message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


module.exports = router;
