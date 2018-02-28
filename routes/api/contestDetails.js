const router = require("express").Router();
const contestDetailsController = require("../../controllers/contestDetailsController");

// Matches with "/api/contestDetails"
router.route("/")
  .get(contestDetailsController.findAll)
  .post(contestDetailsController.create);

// Matches with "/api/contestDetails/:id"
router
  .route("/:id")
  .get(contestDetailsController.findById)
  .put(contestDetailsController.update)
  .delete(contestDetailsController.remove);

module.exports = router;
