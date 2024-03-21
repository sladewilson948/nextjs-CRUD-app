import mongoose from "mongoose"

const connectMongoDB = async () => {

    

    try {

        await mongoose.connect(process.env.URI)
        console.log("Successfuly connected to the database!!" + process.env.URI);
        
    }
    catch (error){
        console.log("There was an error while connecting to the database!!")
    }

}

export default connectMongoDB