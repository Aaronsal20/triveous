const express = require("express");
const tagRoutes = require("./tag");
const bookmarkRoutes = require("./bookmark");

const router = express.Router();

router.use("/api/tag", tagRoutes);

router.use("/api/bookmark", bookmarkRoutes);

module.exports = router;