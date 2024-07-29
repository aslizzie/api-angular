const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Ruta para obtener todos los contenidos
router.get('/movies', contentController.getAllMovies);
router.get('/movies/:id', contentController.getMovieById);

router.get('/series', contentController.getAllSeries);
router.get('/series/:id', contentController.getSerieById);

module.exports = router;
