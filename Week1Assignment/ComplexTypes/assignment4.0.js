// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let numbers = [1,2,3,4,5,6,7]

function checkEven(num){
    let evenNum=[]
    for(let i=0; i<num.length;i++){
        if(num[i]%2==0)
            evenNum.push(num[i]);
    }
    return evenNum;
}

let context = {
    threshold : 2
}
let evenNumberUsingFilter = numbers.filter(function(ele){
    return ele%this.threshold==0
},context)
let evenNumberUsingFilterCopy = numbers.filter((ele)=>ele%2==0)

console.log(checkEven(numbers))
console.log(evenNumberUsingFilter)
console.log(evenNumberUsingFilterCopy)