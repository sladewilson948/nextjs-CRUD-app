import mongoose from "mongoose"

const connectMongoDB = async () => {

    try {

        await mongoose.connect(process.env.URI)
        
    }
    catch (error){
        console.log("There was an error while connecting to the database!!")
    }

}

export default connectMongoDB