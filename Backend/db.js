const mongoose=require('mongoose');
const moongoURI= "mongodb://localhost:27017/inotebook"


const connecttomongoose =()=>{
mongoose.connect(moongoURI,()=>{
console.log("Connected Successfully");
})

}


module.exports=connecttomongoose;