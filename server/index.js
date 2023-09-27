const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const StudentModel = require('./models/Student')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student");

app.post('/register',(req,res)=>{
     StudentModel.create(req.body)
     .then(students => res.json(students))
     .catch(err => res.json(err))
})

app.listen(5173, () => {
    console.log("server is running")
})