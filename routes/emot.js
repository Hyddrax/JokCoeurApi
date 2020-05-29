const emotController = require("../controllers").emot

const router = require("express").Router();

router.post("/emot", emotController.create);
router.get("/emot/:id", emotController.getEmotById);
router.get("/emots", emotController.getAllEmot);
router.delete("/emot/:id", emotController.deleteEmotById);
router.put("/emot/:id", emotController.updateEmotById);

module.exports = router;
