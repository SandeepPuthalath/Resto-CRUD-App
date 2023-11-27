const express = require('express');
const morgan = require('morgan');
const http = require('http');
const { ConfigKeys } = require('./utils/configs/configKeys');
const cookieParser = require('cookie-parser');
const {connectToDB} = require('./database/connection');
const helmet = require('helmet');
const route = require('./routes/index');

// Create express instance
const app = express();
const server = http.createServer(app);

// Using global middlewares.
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());

// Setting up routes for APIs
app.use('/api/v1', route);

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
