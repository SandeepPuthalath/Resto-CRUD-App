const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require("cors")
const { ConfigKeys } = require('./utils/configs/configKeys');
const cookieParser = require('cookie-parser');
const { connectToDB } = require('./database/connection');
const helmet = require('helmet');
const route = require('./routes/index');
const errorHandler = require('./utils/error/errorHanler');
const AppError = require("./utils/error/AppError")

// Create express instance
const app = express();
const server = http.createServer(app);

// Using global middlewares.
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(helmet());

// Setting up routes for APIs
app.use('/api/v1', route);


app.all("*", (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on the server`, httpStatus.NOT_FOUND);
    next(err)
})

// Global error handler
app.use(errorHandler)


// Connecting to Database.
connectToDB()
    .then(() => {
        const PORT = ConfigKeys.PORT ?? 5000;

        // Server starting.
        server.listen(PORT, () => {
            console.log(`Server is listening in PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

module.exports = app;
