const express = require("express")
const router = express.Router();
const restaurantRoute = require("./restaurants")

router.use("/restaurant", restaurantRoute);

module.exports = router;