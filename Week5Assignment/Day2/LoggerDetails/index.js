const express = require('express');
const app = express();

// create a middleware
const logger = (req,res,next) =>{
    console.log(`Method name : ${req.method}`);
    console.log(`Method URL: ${req.url}`);
    console.log(`Method Hostname : ${req.hostname}`);
    console.log(new Date().toDateString());
    next();
}   

const add = (req,res)=>{//http://localhost:3000/add?a=10&b=1
    res.json({
        "result":parseInt(req.query.a)+parseInt(req.query.b)//query parameter
    })
}
const sub = (req,res)=>{//http://localhost:3000/add?a=10&b=1
    res.json({
        "result":parseInt(req.query.a)-parseInt(req.query.b)//query parameter
    })
}
const mul = (req,res)=>{//http://localhost:3000/add?a=10&b=1
    res.json({
        "result":parseInt(req.query.a)*parseInt(req.query.b)//query parameter
    })
}
const div = (req,res)=>{//http://localhost:3000/add?a=10&b=1
    res.json({
        "result":parseInt(req.query.a)/parseInt(req.query.b)//query parameter
    })
}

app.use(logger)
app.get('/add',add);
app.get('/sub',sub);
app.get('/mul',mul);
app.get('/div',div);
app.get('/addition/:a/:b',(req,res)=>{//http://localhost:3000/addition/10/1
    res.json({
        "result":parseInt(req.params.a)+parseInt(req.params.b)//Dynamic routes
    })
});

let PORT=3000;
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})