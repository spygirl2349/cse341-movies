const dotenv = require('dotenv');
// const mongoClient = require('mongodb').MongoClient;
let database;

const mongoose = require('mongoose');

dotenv.config();

const initDb = (callback) => {
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }
    mongoose.connect(process.env.MONGODB)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((error) => {
            callback(error);
        });
}


// const initializeDb = (callback) => {
//     if (database) {
//         console.log('Database is already initialized!');
//         return callback(null, database);
//     }
//     mongoClient.connect(process.env.MONGODB)
//         .then((client) => {
//             database = client;
//             callback(null, database);
//         })
//         .catch((error) => {
//             callback(error);
//         });
// };

const getDatabase = () => {
    if (!database) {
        throw Error('Error! Database not initialized');
    }
    return database;
};

module.exports = { getDatabase, initDb };