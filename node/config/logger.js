import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, json, prettyPrint } = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        // Archivo para logs generales
        new transports.File({ filename: 'combined.log' }),
        // Archivo para logs de error
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' }),
    ],
    rejectionHandlers: [
        new transports.File({ filename: 'rejections.log' }),
    ],
});

// Agrega la consola solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: combine(
            format.colorize(),
            timestamp(),
            format.simple()
        ),
    }));
}

export default logger;
