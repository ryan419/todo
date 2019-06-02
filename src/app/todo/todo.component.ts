import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo$: Observable<Array<any>>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todo$ = this.todoService.getAllTodos();
  }

}
