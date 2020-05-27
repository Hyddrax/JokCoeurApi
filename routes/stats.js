const statsController = require("../controllers").stats

const router = require("express").Router();

router.post("/stat", statsController.create);
router.get("/stat/:id", statsController.getStatById);
router.get("/stats", statsController.getStats);
// router.get("/stats/:userId", statsController.getStatsByUserId);
router.get("/stats/:userId", statsController.getStatsByUserIdAndDate);
router.delete("/stat/:id", statsController.deleteStatById);
router.put("/stat/:id", statsController.updateStatById);

module.exports = router;
