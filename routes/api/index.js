const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
