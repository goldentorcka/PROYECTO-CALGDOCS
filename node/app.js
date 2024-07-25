import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import userRoutes from './routes/routesUsers.js';
import areaRoutes from './routes/routesArea.js';
import formatRoutes from './routes/routesFormat.js';
import { logger } from './config/logger.js';

//Aca va la importacion de la rutas de la tabla y del log
const app = express();
const port = 3001;
const routes = require('./    ');////////////////////////////////aca voy
app.use(cors())
app.use(express.json()) 
app.use('/users', userRoutes)
app.use('/area', areaRoutes)
app.use('/formatos', formatRoutes)

app.use((err, req, res, next) => {
    logger.error(err.message, { stack: err.stack });
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



try {
    await db.authenticate()
    console.log("conexion exitosa a la bd")
} catch (error) {
    console.log("Error de conexion a la bd: ${error}")
}

app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen(8000, () => {
    console.log('Server Up running in http://localhost:8000')
})