const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;
const Listing =require("./models/listing.js");

//database connection
const MONGO_URL="mongodb://127.0.0.1:27017/ExploreX"
async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("Successfully connected to DB");
})
.catch((err)=>{
    console.log(err);
    console.log("Error Not connected");

})




app.listen(port,()=>{
    console.log(`Listening to port = ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello, I am Sarthak Shinde");


})
app.get("/testing", async(req,res)=>{
    let sample =new Listing({
        title:"Hello this is good",
        description:"By the beach",
        price:1200,
        image:"LInk",
        location:"Goa",
        country:"india",
    })
    await sample.save();
    console.log("Sample was saved");
    res.send("Success");
})