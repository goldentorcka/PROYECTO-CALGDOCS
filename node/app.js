import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import userRoutes from './routes/routesUsers.js';
import areaRoutes from './routes/routesArea.js';
import formatRoutes from './routes/routesFormat.js';
//Aca va la importacion de la rutas de la tabla
const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/area', areaRoutes)
app.use('/formatos', formatRoutes)


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