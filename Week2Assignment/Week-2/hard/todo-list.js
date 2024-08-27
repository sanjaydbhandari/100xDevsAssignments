/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todos = [];

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    this.todos.splice(indexOfTodo,1);
  }
  
  update(indexOfTodo,updatedTodo){
    this.todos[indexOfTodo].task=updatedTodo;
  }
  
  getAll(){
    this.todos.forEach((ele)=>{
      console.log(ele)
    })
  }

  get(indexOfTodo){
    this.todos.forEach(ele => {
      if(ele.id == indexOfTodo)
        console.log(ele)
      else
        console.log('no element fount on index '+ indexOfTodo)
    })
  }

  clear(){
    this.todos=[]
  }
}

const todo = new Todo();
let index=0;
todo.add({id:index++,task : "hello"})
todo.add({id:index++,task : "hello sanjay"})
todo.add({id:index++,task : "sanjay"})
todo.update(1,"hello sanjay1")
// todo.remove(1);
// todo.getAll()
todo.clear();
// todo.get(2)

module.exports = Todo;