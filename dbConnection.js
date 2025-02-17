const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB);
        console.log("MongoDb connected...");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;