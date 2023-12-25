import mongoose from "mongoose"

const connectMongodb= async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to the mongodb");
    }
    catch(error){
        console.log(error);
    }
}

export default connectMongodb