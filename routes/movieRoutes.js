const express = require('express');
const router = express.Router();
const moviesController = require("../controllers/moviesControllers")
//! LISTA ROTTE

// index
router.get('/',moviesController.index);
// Show
router.get ("/:id",moviesController.show);
//Create
router.post ("/",moviesController.create);
//Update
router.put ("/:id",moviesController.update );
//Modify
router.patch ("/:id",moviesController.modify);
//Delete
router.delete ("/:id",moviesController.destroy);

module.exports= router