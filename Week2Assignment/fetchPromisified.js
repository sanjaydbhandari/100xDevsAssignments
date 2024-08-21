function fetchPromisified(url){
    return new Promise((resolve,reject)=>{
        fetch(url).then((res)=>{
            console.log(res);
            resolve()
        })
    })
}

fetchPromisified("https://api.publicapis.org/entries")