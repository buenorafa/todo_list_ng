import { Component } from '@angular/core';
import { TaskStatus } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  TaskStatus = TaskStatus;
}
