import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Christopher";
  todoInput: string = "";
  todos = [];



createTodo() {
  let trimmedInput = this.todoInput.trim();
  if (trimmedInput != ""){
    this.todos.push(this.todoInput);
  }
  this.todoInput = "";
}

editTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  console.log('Index of that chore:' + index);

  this.todos[index] = prompt('New To Do:', this.todos[index]);
}

deleteTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  this.todos.splice(index, 1);
  }
  deleteAllTodos() {
    this.todos = [];
  }
}