import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/models/todo';
import { BusService } from 'src/app/shared/services/bus.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css'],
})
export class TodoReactiveFormComponent {
  todoForm = this.fb.group({
    todoTitle: ['', Validators.required],
    todoDone: [false],
  });

  constructor(private fb: FormBuilder, private bus: BusService) {}

  submitTodo() {
    const todo: Todo = {
      title: this.todoForm.value.todoTitle || '',
      completed: this.todoForm.value.todoDone || false,
    };

    this.bus.dispatch({ type: 'NEW_TODO', payload: todo });
  }
}
