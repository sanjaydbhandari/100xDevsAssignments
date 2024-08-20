const bodyEl = document.querySelector("body");
const todoContainerEl = document.querySelector("#todo-container");
const todoListEl = document.querySelector("#todo-list");
const inputEl = document.querySelector('input');
const timeEl = document.querySelector('.time-text');
const dayEl = document.querySelector('.day-text');
const todoBtn = document.querySelector('#todo-btn');

let counter = 0;
let edit = false;

setInterval(()=>{
    const date = new Date(); 
    const currentdDate = date.toDateString();
    const currentTime = date.toLocaleTimeString('en-US',{ hour:'numeric',minute:'numeric',hour12:true});
    timeEl.childNodes[0].innerHTML=currentTime.toString();
    dayEl.innerHTML=currentdDate.toString();
},1000);

const addTodo = () => {
    if(inputEl.value.trim()=="")
        return
    const todolistContainer=document.createElement('div');
    todolistContainer.classList=`todo-${counter}`
    const taskEl=document.createElement('div');
    taskEl.classList="task"
    taskEl.innerHTML=inputEl.value;

    const deleteBtn=document.createElement('button');
    deleteBtn.classList="Btn";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent="Delete";
    deleteBtn.setAttribute("onclick","deleteTodo('todo-"+counter+"')")
    
    const editBtn=document.createElement('button');
    editBtn.classList="Btn";
    editBtn.classList.add("editBtn");
    editBtn.textContent="Edit";
    editBtn.setAttribute("onclick","editTodo('todo-"+counter+"')")

    todolistContainer.appendChild(taskEl)
    todolistContainer.appendChild(editBtn);
    todolistContainer.appendChild(deleteBtn);
    
    todoListEl.appendChild(todolistContainer);
    todolistContainer.classList=`todo-${counter}`;
    inputEl.value="";
    counter++;
} 

const deleteTodo = (id) =>{
    if(confirm('Are you sure you want to delete?')){
        targetList = document.querySelector(`.${id}`);
        todoListEl.removeChild(targetList);
    }
}


const editTodo = (id) =>{
    edit=true;
    targetList = document.querySelector(`.${id}`);
    inputEl.value = targetList.querySelector('.task').innerHTML; 
    todoBtn.innerHTML="Edit"; 
    todoBtn.setAttribute('onclick',`editTask('${id}')`);
    inputEl.focus();
}

const editTask = (id) =>{
    targetList = document.querySelector(`.${id}`);
    console.log(targetList)
    targetList.querySelector('.task').innerHTML = inputEl.value;
    todoBtn.innerHTML="Add"; 
    todoBtn.setAttribute('onclick','addTodo()')
    inputEl.value="";
    inputEl.focus();
}