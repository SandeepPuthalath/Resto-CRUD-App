const express = require("express");
const { handleAddRestaurant, handleGetRestaurants, handleUpdateRestaurant, handleDeleteRestaurant } = require("../controller/resrestaurant-controller/restaurants");
const router = express.Router();

router.route("/")
    .post(handleAddRestaurant)
    .get(handleGetRestaurants)
    .put(handleUpdateRestaurant)
    .delete(handleDeleteRestaurant);

module.exports = router