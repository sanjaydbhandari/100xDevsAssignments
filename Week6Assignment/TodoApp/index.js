const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const SECRET_KEY = "ilovecoding";

app.use(express.json());//for body-parser
app.use(cors());
let users=[
    {
        "id":0,
        "username":"sanjays",
        "password":"ilovecoding" 
    }
];

let todoList=[
    {
        "id": 0,
        "userId": 1,
        "task": "task2222",
        "priority": "priority",
        "status": "status",
        "deadline": "deadline",
        "created_at": "created_at",
        "updated_at": null,
        "deleted": false
    }
];

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
        return res.status(400).json({status:400,message:"Username and Password can't be empty"})
    
    if(username.length < 3)
        return res.status(400).json({status:400,message:"Username must be atleast 3 character long"})
    
    if(!validatePassword(password))
        return res.status(400).json({status:400,message:"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."})
    
    const isUserExist = users.find((user)=>user.username == username);
    req.body.username = username;
    req.body.password = password;
    req.body.isUserExist = isUserExist;
    next();
}

app.post('/signup',checkUserExist,(req,res)=>{
    const {username,password,isUserExist} = req.body;
    if(!isUserExist){
        const userInserted = users.push({
            "id":users.length,
            username,
            password
        });
        if(userInserted){
            console.log(users)
            return res.status(200).json({status:200,message:"User signup succussfully"})
        }else{
            return res.status(400).json({status:400,message:"User signup failed! Please, Try to signup again"})
        }
    }else
        return res.status(400).json({status:400,message:"User Already Exist!, Please visit Signin page"})
});
    
app.post('/signin',checkUserExist,(req,res)=>{
    const {username,password,isUserExist} = req.body;

    if(!isUserExist) return res.status(400).json({status:400,message:"Invalid Username!"})

    const userFound = users.find((user)=>user.username==username && user.password==password);
    if(userFound){
        const token = jwt.sign({
            userId: userFound.id,
            username: userFound.username
        },SECRET_KEY);
        return res.status(200).json({status:200,message:"User signin succussfully!",token})
    }else return res.status(400).json({status:400,message:"Invalid Password!"})
})

const auth = (req,res,next) =>{
    try{
        const token = req.headers.token;
        if(!token)
            return res.status(403).json({status:403,message:"Invalid Token"}) 

        const user = jwt.verify(token,SECRET_KEY);
        if(user){ 
            console.log("token value:",user)
            req.username = user.username; 
            req.userId = user.userId; 
            next()
        }else
            return res.status(400).json({status:400,message:"Unauthorized User! Please, Signin"}) 
    }catch(err){
        return res.status(401).json({status:401,message:err.message});
    }
}
app.use(auth)

const response = (status,message,data=null) => {
    let res = {
        "status":status,
        "message":message,
    }
    if(!data)
        return res;
    res.data = data;
    return res;
}

app.post('/todo',(req,res)=>{
    try{
        const { task, priority, status, deadline, created_at } = req.body;
        const username = req.username;
        const userId = req.userId;
            
        let userFound = todoList.find((todo)=>todo.userId==userId && todo.deleted==false);
        
        const inserted = todoList.push({
            "id": todoList.length,
            "userId":userId,
            "task": task,
            "priority": priority,
            "status": status,
            "deadline":  deadline,
            "created_at":  created_at,
            "updated_at": null,
            "deleted": false
        });

        if(!inserted)
            return res.status(400).json(response(400,"Failed to Add Todo"))

        return res.status(200).json(response(200,"Todo Added Succussfully"))
       
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.get('/todos',(req,res)=>{
    try{
        todos = todoList.filter(todo=>todo.deleted==false && todo.userId == req.userId)
        if(!todos || todos.length === 0)
            return res.json(response(400,"Data Not Found",todos));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todos));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/todos/:id',(req,res)=>{
    try{
        let todo = todoList.find((todo) => todo.id == parseInt(req.params.id) && todo.deleted==false && todo.userId == parseInt(req.userId) );
        console.log(todo)

        if(!todo)
            return res.status(400).json(response(400,`Invalid Todo Id ${req.params.id}! Todo Not Found`));

        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/filterTodo',(req,res)=>{
    try{
        let todo = todoList.filter(todo => todo.status == req.body.status && todo.priority == req.body.priority && todo.deleted==false && todo.userId == parseInt(req.userId));
        if(!todo)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});


app.put('/todos/:id',(req,res)=>{
    try{
        let index = todoList.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false && todo.userId==req.userId))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todoList[index].task = req.body.task;
        todoList[index].priority = req.body.priority;
        todoList[index].status = req.body.status;
        todoList[index].deadline = req.body.deadline;
        todoList[index].updated_at = req.body.updated_at;
        todoList[index].deleted = req.body.deleted;
        return res.status(200).json(response(200,"Todo Edited Succussfully",todoList[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.delete('/todos/:id',(req,res)=>{
    try{
        let index = todos.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false && todo.userId == parseInt(req.userId)))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todoList[index].deleted = true;
        return res.status(200).json(response(200,"Todo Deleted Succussfully",todoList[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});


PORT=3000;
app.listen(PORT,()=>console.log(`App is running on http://localhost:${PORT}`));