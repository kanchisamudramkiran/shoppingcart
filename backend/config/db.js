import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () =>{

    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL,{
             useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB