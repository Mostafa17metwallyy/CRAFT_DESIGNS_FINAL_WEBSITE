const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // for image uploads

// Routes
app.use("/api/messages", require("./routes/messages")); // contact form submissions
app.use("/api/admin", require("./routes/admin"));       // admin login route
app.use("/api/projects", require("./routes/project"));
app.use("/uploads", express.static("uploads")); // serve uploaded files
app.use("/api/production", require("./routes/productionRoutes"));



// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((err) => console.log(err));
