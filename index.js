

require('dotenv').config()
const express =require('express')
const cors=require('cors')
const router=require('./Routes/routes')


const app=express()
app.use(cors())
app.use(express.json())

require('./Connections/connection')
app.use('/api',router)

const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})
