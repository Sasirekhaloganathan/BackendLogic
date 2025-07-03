const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');


const uri = process.env.MONGO_URI;

const connectDB = () => {
    mongoose.connect(uri).then(() => {
        console.log("181's DB is connected");
    }).catch((err) => {
        console.log(err);
    })
};

module.exports = connectDB;