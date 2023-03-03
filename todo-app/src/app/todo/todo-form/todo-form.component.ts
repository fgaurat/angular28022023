import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { BusService } from 'src/app/shared/services/bus.service';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoFormModel = {
    todoTitle: '',
    todoCompleted: false,
  };

  constructor(private todoService: TodoService, private bus: BusService) {}

  submitTodo() {
    const todo: Todo = {
      title: this.todoFormModel.todoTitle,
      completed: this.todoFormModel.todoCompleted,
    };


    this.bus.dispatch({ type: 'NEW_TODO',payload:todo })
  }
}
