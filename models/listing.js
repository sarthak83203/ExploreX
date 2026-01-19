const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    //Little modification done here...
     image: {
        filename: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
   
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },

})
const Listing= mongoose.model("Listing",Schema);
module.exports=Listing; //exportting the file..