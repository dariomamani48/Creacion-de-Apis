const { Router } = require('express');
const express = require('express');
const router = express.Router();
const genresController = require('../controllers/apis/apiGenreController.js')
const actorsController = require('../controllers/apis/apiActorsController')
//genres
router.get('/genres',genresController.getAllGenres)
router.get('/genres/:id',genresController.getOneGenres)
//actors
router.get('/actors', actorsController.getAllActors)
router.get('/actors/:id',actorsController.getOneActor)
router.post('/actors/create',actorsController.create)
router.put('/actors/update/:id',actorsController.update)
router.delete('actos/delete/:id',actorsController.delete)


module.exports = router