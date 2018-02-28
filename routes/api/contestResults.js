const router = require("express").Router();
const contestResultsController = require("../../controllers/contestResultsController");

// Matches with "/api/contestResults"
router.route("/")
  .get(contestResultsController.findAll)
  .post(contestResultsController.create);

// Matches with "/api/contestResults/:id"
router
  .route("/:id")
  .get(contestResultsController.findById)
  .put(contestResultsController.update)
  .delete(contestResultsController.remove);

module.exports = router;
