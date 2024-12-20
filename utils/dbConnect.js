const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
         console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
      console.log(`MongoDB connection failed`);
      console.error(error);
      process.exit(1); 
    }
}

module.exports = connectDB;