const express = require("express");
const router = express.Router();
const userController = require("../apiControllers/usersController");

router.post("/byEmail", userController.findByEmail);
router.post("/create", userController.create);
router.post("/login", userController.login);

module.exports = router;
