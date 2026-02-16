const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;
const Listing =require("./models/listing.js");
const path=require("path");

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

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));


app.listen(port,()=>{
    console.log(`Listening to port = ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Hello, I am Sarthak Shinde");


})
// app.get("/testing", async(req,res)=>{
//     let sample =new Listing({
//         title:"Hello this is good",
//         description:"By the beach",
//         price:1200,
//         image:"LInk",
//         location:"Goa",
//         country:"india",
//     })
//     await sample.save();
//     console.log("Sample was saved");
//     res.send("Success");
// })

app.get("/listings",async (req,res)=>{
 const all_listing=  await Listing.find({});
 res.render("listings/index.ejs",{all_listing});

});


//Show routes
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
   const listing= await Listing.findById(id);
   res.render("listings/show.ejs",{listing});



})