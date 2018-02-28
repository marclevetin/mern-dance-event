const router = require("express").Router();
const contestScoresController = require("../../controllers/contestScoresController");

// Matches with "/api/contestScores"
router.route("/")
  .get(contestScoresController.findAll)
  .post(contestScoresController.create);

// Matches with "/api/contestScores/:id"
router
  .route("/:id")
  .get(contestScoresController.findById)
  .put(contestScoresController.update)
  .delete(contestScoresController.remove);

module.exports = router;
