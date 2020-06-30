const mongoose = require('mongoose');
const connectDb = () => {
    mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(conn => {
        console.log(`MongoDB Connected with host: ${conn.connection.host}`);
    });
};
module.exports = connectDb;