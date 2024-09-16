const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const SECRET_KEY = "ilovecoding";

app.use(express.json())//for body-parser
app.use(cors())
let users=[];
let todoList=[{
    username: "sanjay",
    todos:[
        {
            "id": 1,
            "task": "start reactjs",
            "priority": "Low",
            "status": "OnHold",
            "deadline": "1day",
            "created_at": 1725714369150,
            "updated_at": null,
            "deleted": false
        }
    ]
}];

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

const auth = (req,res,next) =>{
    try{
        const token = req.headers.token;
        const user = jwt.verify(token,SECRET_KEY);
        if(user){ 
            req.username = user.username;
            next()
        return }else
            res.status(400).json({status:400,message:"Unauthorized User! Please, Signin"}) 
    }catch(err){
        return res.status(401).json({status:401,message:err.message});
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
            return res.status(200).json({status:200,message:"User signup succussfully"})
        }else{
            return res.status(400).json({status:400,message:"User signup failed! Please, Try to signup again"})
        }
    }else
        return res.status(400).json({status:400,message:"User Already Exist!"})
});
    
app.post('/signin',checkUserExist,(req,res)=>{
    const {username,password,isUserExist} = req.body;

    if(!isUserExist) return res.status(400).json({status:400,message:"Invalid Username!"})

    const userFound = users.find((user)=>user.username==username && user.password==password);
    if(userFound){
        const token = jwt.sign({
            username
        },SECRET_KEY);
        return res.status(200).json({status:200,message:"User signin succussfully!",token})
    }else return res.status(400).json({status:400,message:"Invalid Password!"})
})


app.use(auth)
app.get('/',(req,res)=>{
    console.log(req.username)
    res.sendFile(__dirname+'/public/index.html');
})

app.get('/todos',(req,res)=>{
    console.log("req")
})

// TODO

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

app.post('/todos',(req,res)=>{
    try{
        const { task, priority, status, deadline, created_at } = req.body;
        const username = req.username;
        let userFound = todoList.find((todo)=>todo.username=="sanjay");
        
        if(!userFound){
            let newTodo = {
                "id": 0,
                "task": task,
                "priority": priority,
                "status": status,
                "deadline":  deadline,
                "created_at":  created_at,
                "updated_at": null,
                "deleted": false
            }
            if(userFound)
                userFound.push({"username":username,"todos":[newTodo]})
            else
                return res.status(200).json(response(200,"Todo Added Succussfully",newTodo))
        }
        else{
            
        }
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.get('/todos',(req,res)=>{
    try{
        let todos = readTodos();
        todos = todos.filter(todo=>todo.deleted==false)
        if(!todos || todos.length === 0)
            return res.json(response(400,"Data Not Found",todos));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todos));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let todo = todos.find(todo => todo.id == parseInt(req.params.id) && todo.deleted==false);
        if(!todo)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));

        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});

app.get('/filterTodo',(req,res)=>{
    try{
        let todos = readTodos();
        let todo = todos.filter(todo => todo.status == req.body.status && todo.priority == req.body.priority && todo.deleted==false);
        if(!todo)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        return res.status(200).json(response(200,"Data Fetched Succussfully",todo));
    }catch(err){
        return res.status(500).json({"status":500,"error":err.message});  
    }
});


app.put('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos[index].task = req.body.task;
        todos[index].priority = req.body.priority;
        todos[index].status = req.body.status;
        todos[index].deadline = req.body.deadline;
        todos[index].updated_at = req.body.updated_at;
        todos[index].deleted = req.body.deleted;
        writeTodos(todos);
        return res.status(200).json(response(200,"Todo Edited Succussfully",todos[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.delete('/todos/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo=>(todo.id===parseInt(req.params.id) && todo.deleted == false))
        if(index === -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos[index].deleted = true;
        writeTodos(todos);
        return res.status(200).json(response(200,"Todo Deleted Succussfully",todos[index]))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message})
    }
});

app.delete('/deleteTodo/:id',(req,res)=>{
    try{
        let todos = readTodos();
        let index = todos.findIndex(todo => todo.id === parseInt(req.params.id))
        if(index == -1)
            return res.status(400).json(response(400,`Invalid Id ${req.params.id}! Todo Not Found`));
        todos.splice(index,1);
        writeTodos(todos)
        return res.status(200).json(response(200,`Todo Deleted Succussfully!`))
    }catch(err){
        return res.status(500).json({"status":500,"message":err.message});
    }
})

PORT=3000;
app.listen(PORT,()=>console.log(`App is running on http://localhost:${PORT}`));