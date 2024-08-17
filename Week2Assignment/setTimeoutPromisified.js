// Try to create a promisified version of 
// setTimeoutfetch
// FileSystem.readFile

function setTimeoutPromisified(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}

function callback(){
    console.log('hey sanjay!')
}

setTimeoutPromisified(5000).then(callback)