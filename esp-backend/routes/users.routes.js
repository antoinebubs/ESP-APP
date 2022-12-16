const express = require("express");
const router = express.Router();
const controller = require('../controllers/users.controller')
router.get("/users", controller.getAllUsers);
router.post('/create', controller.createUser)

module.exports = router;