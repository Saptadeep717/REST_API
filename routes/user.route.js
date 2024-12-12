const express = require('express');
const userController = require('../controllers/user.controller.js')
const router = express.Router();

router.get('/users',userController.getUsers);
router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;