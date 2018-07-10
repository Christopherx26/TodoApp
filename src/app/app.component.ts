import { Component } from '@angular/core';
import { THIS_EXPR } from '../../node_modules/@angular/compiler/src/output/output_ast';

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
    if(trimmedInput != "") {
      this.todos.push({
        isChecked: false,
        name: this.todoInput
      });
    }
  this.todoInput = "";
}

editTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  console.log('Index of that chore:' + index);


  let tempTodoDesc = this.todos[index].name;
  this.todos[index].name = prompt('New To Do:', this.todos[index].name);
  if (this.todos[index].name == null) {
    this.todos[index].name = tempTodoDesc;
  }
}

deleteTodo(chore) {
  console.log('Chore that was clicked' + chore);
  let index = this.todos.indexOf(chore);
  this.todos.splice(index, 1);
  }

  deleteAllTodos() {
    this.todos = [];
  }

  checkOffTodo(chore) {
    chore.isChecked = !chore.isChecked
  }
}