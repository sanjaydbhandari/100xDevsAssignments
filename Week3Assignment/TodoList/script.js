const bodyEl = document.querySelector('body');
const parentEl = document.querySelector('div');
let counter=0;

function addTodo(){
    let inputEle = document.querySelector("input");
    if(inputEle.value.trim()=='')
        return 
    let newTodoDivEl = document.createElement("div");
    // newTodoDivEl.classList="parent";
    newTodoDivEl.innerHTML=`<div class="todo-${counter}"><span>${inputEle.value}</span><button onclick="editTodo('todo-${counter}')">Edit</button><button onclick="deleteTodo('todo-${counter}')">Delete</button></div>`;
    document.querySelector('body').appendChild(newTodoDivEl);
    inputEle.value="";
    counter++;
}

function deleteTodo(id){
    const deleteNode = document.querySelector(`.${id}`);
    deleteNode.parentElement.removeChild(deleteNode);
}

function editTodo(id){
    const editNode = document.querySelector(`.${id}`).childNodes[0].innerHTML;
    let inputEle = document.querySelector("input");
    inputEle.value=editNode;
}