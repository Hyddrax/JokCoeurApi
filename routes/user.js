const userController = require("../controllers").user

const router = require("express").Router();

router.post("/user", userController.create);
router.get("/users", userController.getAllUsers);
router.get("/user/:email", userController.getUsersByEmail);
router.delete("/user/:email", userController.deleteUserByEmail);
router.put("/user/:email", userController.updateUserByEmail);

module.exports = router;
