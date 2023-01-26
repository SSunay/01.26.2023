
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const {Schema}=mongoose
const dotenv =require('dotenv')
dotenv.config()

const  schoolsSchema= new Schema({
        name:{type:String,required:true},
        catacory:{type:String,required:true},
        description:{type:String,required:true},
        price:{type:Number,required:true},
        img:{type:String,required:true},
})

const Schools= mongoose.model('schools',schoolsSchema)

app.use(cors())
app.use(bodyParser.json())

//// get all data
app.get('/schools', (req, res) => {
    Schools.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// get by id 

app.get('/schools/:_id',(req,res)=>{
    const{_id}=req.params
    Schools.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'not found...'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// delete

app.delete('/schools/:_id',(req,res)=>{
    const {_id}=req.params
    Schools.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

////post

app.post('/schools',(req,res)=>{
    let user= new Schools({
        name:req.body.name,
        catacory:req.body.catacory,
        description:req.body.description,
        price:req.body.price,
        img:req.body.img,

    })
    user.save()
    res.send('success...')
})


const PORT =process.env
const DB = process.env.DB_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('DB connected')
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
    }
})
