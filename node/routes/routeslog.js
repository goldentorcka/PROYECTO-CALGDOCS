// const express = require('express');
// const router = express.Router();
// const winston = require('winston');
// const DailyRotateFile = require('winston-daily-rotate-file');

// // Configuración de winston para rotación diaria de archivos
// const logger = winston.createLogger({
//     level: 'error',
//     format: winston.format.combine(
//         winston.format.timestamp({
//             format: 'YYYY-MM-DD HH:mm:ss'
//         }),
//         winston.format.printf(info => ${info.timestamp} ${info.level}: ${info.message})
//     ),
//     transports: [
//         new DailyRotateFile({
//             filename: 'logs/error-%DATE%.log',
//             datePattern: 'YYYY-MM-DD',
//             maxFiles: '90d' // Guardar logs por 90 días
//         })
//     ]
// });

// // Middleware de logging de errores
// const logError = (err, req, res, next) => {
//     logger.error(err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
// };

// // Define tus rutas
// router.get('/hello', (req, res, next) => {
//     try {
//         res.json({ message: 'Hello, World!' });
//     } catch (err) {
//         next(err); // Pasa el error al middleware de manejo de errores
//     }
// });

// router.get('/ADSO', (req, res, next) => {
//     try {
//         res.json({ data: "Hola ADSO!" });
//     } catch (err) {
//         next(err); // Pasa el error al middleware de manejo de errores
//     }
// });

// // Usar el middleware de manejo de errores
// router.use(logError);

// module.exports = router;