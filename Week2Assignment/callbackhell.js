// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

// ----------doesnt really have callback hell

// function hi(){
//     console.log('hi');
//     setTimeout(hello,3000)
// }

// function hello(){
//     console.log('hello');
//     setTimeout(helloThere,5000)
// }

// function helloThere(){
//     console.log('hello there');
// }

// setTimeout(hi,1000)


// callbackhell----------------------
// function hi(){
//     setTimeout(()=>{
//         console.log('hi');
//         setTimeout(()=>{
//         console.log('hello');
//         setTimeout(()=>{
//             console.log('hello there!');
//         },2000)
//     },3000)
//     },1000)
// })

// using promises

function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

// using promises

// setTimeoutPromisified(1000).then(function(){
//     console.log('hi')
//     setTimeoutPromisified(3000).then(function(){
//         console.log('hello');
//         setTimeoutPromisified(5000).then(function (){
//             console.log('hello there')
//         });
//     });
// });

// alternative

setTimeoutPromisified(1000)
    .then(function(){
        console.log('hi')
        return setTimeoutPromisified(3000);
    })
    .then(function(){
        console.log('hello')
        return setTimeoutPromisified(5000);
    })
    .then( function(){
        return console.log("hello there");
    });


