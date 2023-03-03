import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EMPTY, filter, merge, Observable, switchMap } from 'rxjs';
import { Action } from 'src/app/shared/models/action';
import { Todo } from 'src/app/shared/models/todo';
import { BusService } from 'src/app/shared/services/bus.service';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  todoList$: Observable<Todo[]> = EMPTY;

  displayedColumns: string[] = [
    'id',
    'title',
    'completed',
    'completedChk',
    'actions',
  ];

  constructor(
    private todoService: TodoService,
    private busService: BusService
  ) {}

  ngAfterViewInit(): void {
    this.busService.dispatch({ type: 'INIT_TODO' });
  }

  ngOnInit(): void {
    const new$: Observable<Todo> = this.busService.bus$.pipe(
      filter((action) => action.type === 'NEW_TODO'),
      switchMap((action) => this.todoService.save(action.payload)),
    );

    const delete$: Observable<Action> = this.busService.bus$.pipe(
      filter((action) => action.type === 'DELETE_TODO'),
      switchMap((action) => this.todoService.delete(action.payload))
    );

    const init$: Observable<Action> = this.busService.bus$.pipe(
      filter((action) => action.type === 'INIT_TODO')
    );

    this.todoList$ = merge(new$, delete$, init$).pipe(
      switchMap(() => this.todoService.findAll())
    );
  }

  doDelete(todo: Todo) {
    this.busService.dispatch({ type: 'DELETE_TODO', payload: todo });
  }
}
