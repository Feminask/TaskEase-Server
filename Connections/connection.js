const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`mongoDb is connected`);
    
}).catch(err=>{
    console.log(`mongoDb is not connected reason:${err}`);
    
})