const bodyEl = document.querySelector("body");
const todoContainerEl = document.querySelector("#todo-container");
const todoListEl = document.querySelector("#todo-list");
const inputEl = document.querySelector('input');
let counter = 0;

const addTodo = () => {
    const todolistContainer=document.createElement('div');
    todolistContainer.classList=`todo-${counter}`
    const taskEl=document.createElement('div');
    taskEl.classList="task"
    taskEl.innerHTML=inputEl.value;

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent="Delete";
    deleteBtn.addEventListener('click',deleteTodo)

    todolistContainer.appendChild(taskEl)
    todolistContainer.appendChild(deleteBtn);
    
    todoListEl.appendChild(todolistContainer);
    todolistContainer.classList=`todo-${counter}`;
    inputEl.value="";
} 

const deleteTodo = (id) =>{
    if(confirm('Are you sure you want to delete?')){
        targetList = document.querySelector(`.todo-${counter}`);
        todoListEl.removeChild(targetList);
    }
}