const express = require('express')
const app=express()
const PORT= process.env.PORT|| 5000;
app.listen(PORT,()=>{console.log("server is running")})

app.get('/',(req,res)=>{res.json({Message:"Welcome to client base"})})


app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))
app.use('/api/clients',require('./routes/clients'))