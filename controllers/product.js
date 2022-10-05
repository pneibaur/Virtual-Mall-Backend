// DEPENDENCIES
const express = require('express');
const router = express.Router()
const Store = require('../models/store.js');

// product Index Route
router.get("/store/:id/product", async (req, res) => {
    try{
        // this returns all products. I'm not sure why I had to use two lines of code, but it works.
        let foundStore = await Store.findById(req.params.id)
        res.json(foundStore.productList);
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// product Create Route
router.post("/store/:id/product", async (req, res) => {
    try{
        // this creates, and postman will return the store object with the prodcutsList, 
        // but your new product will NOT be displayed for some reason. 
        res.json(await Store.findByIdAndUpdate(
            req.params.id, 
            {$addToSet: {productList: req.body}}
            ));
    } catch (error) {
        // send error
        res.status(400).json(error);
    }
})

// product Delete Route
router.delete("/store/:storeId/product/:prodId", (req,res)=> {
    try{
        // This deletes, but running on postman will NOT post what you just deleted for some reason...
        Store.findById(req.params.storeId, (error, foundStore) =>{
            console.log(req.params.storeId)
            res.json(foundStore.productList.id(req.params.prodId).remove());
            foundStore.save()
        })
    } catch (error) {
        // send error
        res.status(400).json(error)
    }
})

// product Update Route
router.put("/product/:id", async (req, res) => {
    try {
      // THIS is still a WIP. not complete! 
      res.json(
        await Store.productList.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
        console.log("update this: ")
        console.log(Store.productList.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
      // send error
      res.status(400).json(error);
    }
  });





module.exports = router