const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const sendMail = require('./mail')
const app = express()

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.post('/',(req,res)=>{
    const {name,email,message} = req.body
    const text = `Name: ${name},\n Email: ${email},\n Message: ${message}`
    sendMail(email,text,function(err,data){
        if(err){
            res.status(500).send('Internal error')
        }else{
            res.status(301).redirect('/success')
        }
    })
})
app.get('/success',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','success.html'))
})
app.listen(3000,()=>{
    console.log('Connected on port 3000')
})