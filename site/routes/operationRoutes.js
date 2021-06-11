const express = require("express");
const router = express.Router();
const opController = require("../apiControllers/operationsController");

router.get("/all", opController.findAll);
router.get("/lastOps", opController.lastOps);
router.get("/byType/:id", opController.findAllByType);
router.get("/byCategory/:id", opController.findAllByCategory);
router.get("/total", opController.totalBalance);
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
