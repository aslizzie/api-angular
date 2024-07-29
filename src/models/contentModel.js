const db = require('../config/db');

const getAllMovies = async () => {
    const query = `
        SELECT c.content_id, c.title, m.movie_id, c.banner_image
        FROM Content c
        INNER JOIN Movies m ON c.content_id = m.content_id;
    `;
    const [rows, fields] = await db.query(query);
    return rows;
};

const getMovieById = async (movieId) => {
    const query = `
        SELECT c.content_id, c.title, c.description, m.movie_id, m.director, m.duration, c.hero_image
        FROM Content c
        INNER JOIN Movies m ON c.content_id = m.content_id
        WHERE c.content_id = ?;
    `;
    const [rows, fields] = await db.query(query, [movieId]);
    return rows[0]; // Devolver solo la película encontrada
};

const getAllSeries = async () => {
    const query = `
        SELECT c.content_id, c.title, s.serie_id, c.banner_image
        FROM Content c
        INNER JOIN Series s ON c.content_id = s.content_id
    `;
    const [rows, fields] = await db.query(query);
    return rows;
};

const getSerieById = async (seriesId) => {
    const query = `
        SELECT c.content_id, c.title, c.description, s.serie_id, s.seasons, s.episodes, c.hero_image
        FROM Content c
        INNER JOIN Series s ON c.content_id = s.content_id
        WHERE s.content_id = ?;
    `;
    const [rows, fields] = await db.query(query, [seriesId]);
    return rows[0]; // Devolver solo la serie encontrada
};

module.exports = {
    getAllMovies,
    getMovieById,
    getAllSeries,
    getSerieById
};

