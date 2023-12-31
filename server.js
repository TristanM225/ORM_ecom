require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection DONE

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server DONE
sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
}).catch ((err) => {
    console.log('Unable to sync database:', err);
});
