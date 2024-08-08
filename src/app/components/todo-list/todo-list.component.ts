import { Component } from '@angular/core';
import { TaskStatus } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  TaskStatus = TaskStatus;
}
