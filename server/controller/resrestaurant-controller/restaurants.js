const expressAsyncHanlder = require("express-async-handler");
const Restaurant = require("../../database/model/restaurantsModel");
const httpStatus = require("../../utils/httpStatus");

const handleAddRestaurant = expressAsyncHanlder(async (req, res, next) => {
    const newRestaurant = req.body;
    Restaurant.create(newRestaurant).then((result) => {
        res.status(httpStatus.SUCCESS).json({ status: "success", message: "Restaurant saved successfully" })
    }).catch((err) => {
        console.log(err)
    })
})

const handleGetRestaurants = expressAsyncHanlder(async (req, res, next) => {
    Restaurant.findAll().then((restaurants) =>{
        res.status(httpStatus.OK).json({restaurantCount: restaurants.length, restaurants});
    }).catch((err) =>{
        console.log(err)
    })
})

const handleUpdateRestaurant = expressAsyncHanlder(async (req, res, next) =>{
    const restoId = req.query.restoId
    const updatedData = req.body
    Restaurant.update(updatedData, {where : {id: restoId }}).then((result) =>{
        res.status(httpStatus.SUCCESS).json({status: "success", message: `Restaurants with id : ${restoId} has been updated`})
    }).catch((err) =>{
        console.log(err)
    })
})

const handleDeleteRestaurant = expressAsyncHanlder(async (req, res, next) =>{
    const restoId = req.query.restoId;
    Restaurant.destroy({where:{id: restoId}}).then((result) =>{
        res.status(httpStatus.SUCCESS).json({ status: "success", message: `Restaurants with id : ${restoId} has been deleted` })
    }).catch((err) =>{
        console.log(err)
    })
})

module.exports = {
    handleAddRestaurant,
    handleGetRestaurants,
    handleUpdateRestaurant,
    handleDeleteRestaurant,
}