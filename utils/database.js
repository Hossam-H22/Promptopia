
import mongoose from "mongoose";

let isConnected = false;

export const connectedToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MOngoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("MongoDb connected");
    } catch (error) {
        console.log(error);
        
    }

}