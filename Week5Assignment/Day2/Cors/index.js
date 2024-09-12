<<<<<<< HEAD
const express = require("express");
const app = express();

app.use(express.json());
app.post("/add", (req, res) => {
  res.json({
    result: parseInt(req.body.a) + parseInt(req.body.b),
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
=======
const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/add",function(req,res){
    console.log(parseInt(req.body.a)+parseInt(req.body.b));
    res.json({
        "result":parseInt(req.body.a)+parseInt(req.body.b)
    })
});

const PORT=3333
app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`);
})
>>>>>>> 406344b (add cors assignment)
