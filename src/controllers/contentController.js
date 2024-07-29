const contentModel = require('../models/contentModel');

exports.getAllMovies = async (req, res) => {
    try {
        const contents = await contentModel.getAllMovies();
        res.json(contents);
    } catch (error) {
        console.error('Error retrieving contents:', error);
        res.status(500).json({ message: 'Error retrieving contents', error });
    }
};

exports.getMovieById = async (req, res) => {
    const movieId = req.params.id;

    if (!movieId || isNaN(movieId)) {
        return res.status(400).json({ message: 'Invalid movie ID' });
    }

    try {
        const movie = await contentModel.getMovieById(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error retrieving movie:', error);
        res.status(500).json({ message: 'Error retrieving movie', error: error.message });
    }
};

exports.getAllSeries = async (req, res) => {
    try {
        const contents = await contentModel.getAllSeries();
        res.json(contents);
    } catch (error) {
        console.error('Error retrieving contents:', error);
        res.status(500).json({ message: 'Error retrieving contents', error });
    }
};

exports.getSerieById = async (req, res) => {
    const seriesId = req.params.id; // Obtener el ID de la serie desde los parámetros de la ruta
    try {
        const series = await contentModel.getSerieById(seriesId);
        if (!series) {
            return res.status(404).json({ message: 'Series not found' });
        }
        res.json(series); // Retornar la serie encontrada
    } catch (error) {
        console.error('Error retrieving series:', error);
        res.status(500).json({ message: 'Error retrieving series', error });
    }
};
