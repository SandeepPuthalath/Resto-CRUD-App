const express = require("express");
const { handleAddRestaurant, handleGetRestaurants, handleUpdateRestaurant, handleDeleteRestaurant, handleGetRestaurant } = require("../controller/resrestaurant-controller/restaurants");
const router = express.Router();

router.route("/")
    .post(handleAddRestaurant)
    .get(handleGetRestaurants)
    .put(handleUpdateRestaurant)
    .delete(handleDeleteRestaurant);

router.route("/:restoId").get(handleGetRestaurant);

module.exports = router