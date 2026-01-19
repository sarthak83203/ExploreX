//Intialization logic...
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/ExploreX"
async function main(){
    await mongoose.connect(MONGO_URL);   
}
main().then(()=>{
    console.log("Connected to DB");
})
.catch(()=>{
    console.log("Error Somewhere");
})

const initDb=async ()=>{
    //cleaning random data....
   await  Listing.deleteMany({}); //deleting data from database..
   await Listing.insertMany(initData.data);
   console.log("Data was initialized");
}
initDb();
