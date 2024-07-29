const express = require('express');
const cors = require('cors'); // Importar el middleware CORS
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes desde tu aplicación Angular
app.use(cors({
    origin: 'http://localhost:4200', // Permitir solo desde tu aplicación Angular
}));

const contentRoutes = require('./src/routes/content');
const authRoutes = require('./src/routes/auth'); // Importar las rutas de autenticación

app.use('/api/contents', contentRoutes);
app.use('/api/auth', authRoutes); // Usar las rutas de autenticación

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

