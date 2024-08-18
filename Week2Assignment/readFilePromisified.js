const fs = require('fs');

function readFilePromisified(fileName,contentType){
    return new Promise((resolve,reject)=>{
        let content = fs.readFile(fileName,contentType,(err,data)=>{
            if(data)
                resolve(data)
        });
    })
}

function callback(){
    console.log('file read succussfully')
}

readFilePromisified('a.txt','utf-8').then((res)=>{
    console.log(res);
}).then(cal);