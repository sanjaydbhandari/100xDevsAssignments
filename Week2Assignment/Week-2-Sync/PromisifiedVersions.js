// Try to create a promisified version of 
// 1.setTimeoutfetch
// 2.fs.readFile
// 3.fetch
// 4.fs.readFile
// 5.fs.writeFile
// 6.clearFile

// 1.setTimeoutfetch-----------------------------------------------
// function setTimeoutPromisified(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms)
//     })
// }

// function callback(){
//     console.log('Hello Everyone!')
// }

// setTimeoutPromisified(5000).then(callback)


// 2.fs.readFile ---------------------------------------------------------
// const fs = require('fs');

// function readFilePromisified(fileName,contentType){
//     return new Promise((resolve,reject)=>{
//         let filecontent = fs.readFile(fileName,contentType,(err,data)=>{
//             if(err)
//                 reject(err)
//             if(data)
//                 resolve(data);
//         });
//     });
// }

// readFilePromisified('a.txt','utf8').then((res)=>{
//     console.log(res);
// }).then(()=>{
//     console.log('file read successfully')
// })

// fetch------------------------------------------------------------

// fetch itself return Promise

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data)
// }).catch(error => console.log(error))
// .finally(()=>console.log("fetch succussfully"))


// function fetchPromisified(url){
//     return fetch(url)
// }

// fetchPromisified("https://jsonplaceholder.typicode.com/posts/1")
// .then(res=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("fetch succussfully!"))


// writeFile-------------------------------------------------

const fs = require('fs');

function writeFilePromisified(fileName,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName,data,(err)=>{
            if(err)
                console.log(err)
            else
            resolve("file with named greet is created and written content succussfully!")
        })
    })
}

let data ="hello sanjay"
writeFilePromisified('greet.txt',data)
.then((res)=>console.log(res))