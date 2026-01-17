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
    image:{
        type:String,
        default:"Link",
        //setting the value set..
        // set:(v)=>v===""?"row.webp":v,
        required:true,
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