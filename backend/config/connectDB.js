const mongoose = require("mongoose")
//Attention: if there are '@'s contained in your db password, mongoose will mis recognize them as some parameters, 
// to solve this, please use '%40' to replace the '@' in your password
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};

module.exports = connectDB
