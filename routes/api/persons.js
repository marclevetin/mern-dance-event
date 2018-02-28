const router = require("express").Router();
const personsController = require("../../controllers/personsController");

// Matches with "/api/persons"
router.route("/")
  .get(personsController.findAll)
  .post(personsController.create);

// Matches with "/api/persons/:id"
router
  .route("/:id")
  .get(personsController.findById)
  .put(personsController.update)
  .delete(personsController.remove);

module.exports = router;
