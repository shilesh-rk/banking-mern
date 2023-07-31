const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRegister = require('./model/model')
const middleware = require('./model/middleware')
const jwt = require('jsonwebtoken')
const generateToken = require('./model/generateToken')
const path = require('path')
// const collect = require('collect.js')
const app = express()

mongoose.connect('mongodb+srv://login:login@cluster0.chn06lm.mongodb.net/').then(
    ()=>console.log("DB is connected")
)

app.use(express.json()) //instead of body parser

app.use(cors({origin:'*'})) //to access data from any router



app.post('/register', async (req, res)=>{
    try{
        const {username, email, password} = req.body
        let exist = await UserRegister.findOne({email})
        if(exist){
            return res.status(400).send('user already exist')
        }
        let newUser = new UserRegister({
            username,
            email,
            password,
            account:Math.floor(Math.random() * 1000000000000),
            balance:500,
            phone:"",
            address:""
        })
        await newUser.save();
        return res.status(200).json({_id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            account:newUser.account,
            balance:newUser.balance,
            phone:newUser.phone,
            address:newUser.address})
    }catch(err){
        console.log(err)
        res.status(500).send('internal server error')
    }
})

app.get('/getreg', async (req, res)=>{
    try{
        const users = await UserRegister.find()
        return res.json(users)
    }
    catch(err) {
        return res.status(400).send('Try Again');
    }
})

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const exist = await UserRegister.findOne({email});
    try{

        if(!exist){
            return res.status(400).send('user not found');
        }
        if(exist.password!==password) {
            return res.status(400).send('Invalid credentials')
        }

            return res.json({_id:exist._id,
                username:exist.username,
                email:exist.email,
                account:exist.account,
                token:generateToken(exist._id),
                balance:exist.balance,
                address:(exist.address?exist.address:null),
                phone:(exist.phone?exist.phone:null),
                city:(exist.city?exist.city:null)})
    }
        catch(err) {
            console.log(err)
            res.status(500).send('server error')
        }
        
})

app.put('/updateprofile/:id',async (req, res)=>{
    const {username, email, phone, address,city} = req.body
    try{
        let existUpdated = await UserRegister.findByIdAndUpdate(
            req.params.id, //finding By this Id
            {$set:{
                username : username||UserRegister.username,
                email : email||UserRegister.email,
                phone : phone||UserRegister.phone,
                address : address||UserRegister.address,
                city : city||UserRegister.city,
                token:generateToken(req.params.id),
                }},
            {new: true}); 
        if(!existUpdated){
            return res.status(400).send("You Can't Perform this Action")
        }

        return res.status(200).json(existUpdated) 
    }catch(err){
        console.log(err)
        return res.status(500).send('server error',err)
    }
})

app.put('/getusers/:id', async (req, res)=>{
    try {
     const {Balance, Draw_Balance} = req.body
     const result  = await UserRegister.findByIdAndUpdate(
        req.params.id, //finding By this Id
        {$inc:{balance : (Balance?Balance:-Draw_Balance)}},
        {new: true}); 
     if(!result){
        return res.status(404).json({error: "user not found"})
     }
        return res.status(200).json({_id:result._id,
            username:result.username,
            email:result.email,
            account:result.account, 
            balance:result.balance,
            token:generateToken(result._id),
            address:result.address?result.address:null,
            phone:result.phone?result.phone:null,
            city:result.city?result.city:null,
        }) 

    } catch (error) {
        console.log(error)
        return res.status(500).send('server error while fetching balance')
    }
})


app.put('/transfer/:id', async (req, res)=>{
    try {
     const {toId, amount} = req.body
     const OwnData  = await UserRegister.findByIdAndUpdate(
        req.params.id, //finding By this Id
        {$inc:{balance : -amount}},
        {new: true});
    const toData = await UserRegister.findByIdAndUpdate(
         toId,
        {$inc:{balance : amount}},
        {new: true});
     if(!OwnData){
        return res.status(404).json({error: "user not found"})
     }
        return res.status(200).json([{_id:OwnData._id,
            username:OwnData.username, 
            email:OwnData.email,
            account:OwnData.account,
            token:generateToken(OwnData._id),
            balance:OwnData.balance,
            address:OwnData.address?OwnData.address:"-",
            phone:OwnData.phone?OwnData.phone:"-",
            city:OwnData.city?OwnData.city:"-",
        },{
            _id:toData._id,
            username:toData.username, 
            email:toData.email,
            account:toData.account, 
            balance:toData.balance,
            address:toData.address?toData.address:"-",
            phone:toData.phone?toData.phone:"-",
            city:toData.city?toData.city:"-",
        }]) 

    } catch (error) {
        console.log(error)
        return res.status(500).send('server error while fetching balance')
    }
})

app.listen(5001, ()=>{
    console.log("server is running...")
})