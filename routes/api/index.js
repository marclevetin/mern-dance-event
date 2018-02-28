const router = require("express").Router();

const bookRoutes = require("./books");
const contestDetailsRoutes = require('./contestDetails');
const contestResultsRoutes = require('./contestResults');
const contestScoresRoutes = require('./contestScores');
const eventsRoutes = require('./events');
const judgesRoutes = require('./judges');
const personsRoutes = require('./persons');

// Book routes
router.use("/books", bookRoutes);
router.use("/contestDetails", contestDetailsRoutes);
router.use("/contestResults", contestResultsRoutes);
router.use("/contestScores", contestScoresRoutes);
router.use("/events", eventsRoutes);
router.use("/judges", judgesRoutes);
router.use("/persons", personsRoutes);

module.exports = router;
