const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express()
//middleWare
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('jhon is bussy in shopping')
})
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})