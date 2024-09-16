const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const SECRET_KEY = "ilovecoding";

app.use(express.json())//for body-parser

let users=[];
let todos=[];

const validatePassword=(password)=>{
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        password.length >= minLength 
        // &&
        // hasUpperCase &&
        // hasLowerCase &&
        // hasNumber &&
        // hasSpecialChar
    );
}

const checkUserExist = (req,res,next) => {
    let { username, password} = req.body;
    username = username.trim();
    password = password.trim();
    
    if(!username || !password)  
        res.status(400).json({status:400,message:"Username and Password can't be empty"})
    
    if(username.length < 3)
        res.status(400).json({status:400,message:"Username must be atleast 3 character long"})
    
    if(!validatePassword(password))
        res.status(400).json({status:400,message:"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."})
    
    const isUserExist = users.find((user)=>user.username == username);
    req.body.username = username;
    req.body.password = password;
    req.body.isUserExist = isUserExist;
    next();
}

const auth = (req,res,next) =>{
    try{
        const token = req.headers.token;
        const user = jwt.verify(token,SECRET_KEY);
        if(user){ 
            req.username = user.username;
            next()
        }else
            res.status(400).json({status:400,message:"Unauthorized User! Please, Signin"}) 
    }catch(err){
        res.status(401).json({status:401,message:err.message});
    }
}

app.post('/signup',checkUserExist,(req,res)=>{
    const {username,password,isUserExist} = req.body;
    if(!isUserExist){
        const userInserted = users.push({
            username,
            password
        });
        if(userInserted){
            res.status(200).json({status:200,message:"User signup succussfully"})
        }else{
            res.status(400).json({status:400,message:"User signup failed! Please, Try to signup again"})
        }
    }else
        res.status(400).json({status:400,message:"User Already Exist!"})
});
    
app.post('/signin',checkUserExist,(req,res)=>{
    const {username,password,isUserExist} = req.body;
    if(!isUserExist) res.status(400).json({status:400,message:"Invalid Username!"})

    const userFound = users.find((user)=>user.username==username && user.password==password);
    if(userFound){
        const token = jwt.sign({
            username
        },SECRET_KEY);
        res.status(200).json({status:200,message:"User signin succussfully!",token})
    }else res.status(400).json({status:400,message:"Invalid Username!"})
})

app.post('/courses',auth,(req,res)=>{
    console.log(req.username)
})

PORT=3000;
app.listen(PORT,()=>console.log(`App is running on http://localhost:${PORT}`));