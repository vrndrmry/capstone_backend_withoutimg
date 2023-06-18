const mongoose = require("mongoose")


exports.connectMongoose = () =>{
    mongoose.connect(`mongodb+srv://vrndrmry13:6vwT4ujarQI9SxbA@cluster0.dy3dobq.mongodb.net/?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to MongoDB")
    }).catch(err=>{
        console.log(err)
    })
}

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type:String,
        unique:true,
        required:true,
        min:4,
    },
    password:{
        type:String,
        required:true,
        min:4
    }
})

exports.User = new mongoose.model("User",user)