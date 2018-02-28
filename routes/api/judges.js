const router = require("express").Router();
const judgesController = require("../../controllers/judgesController");

// Matches with "/api/judges"
router.route("/")
  .get(judgesController.findAll)
  .post(judgesController.create);

// Matches with "/api/judges/:id"
router
  .route("/:id")
  .get(judgesController.findById)
  .put(judgesController.update)
  .delete(judgesController.remove);

module.exports = router;
