import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../models/task';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<void>();

  status = TaskStatus;

  constructor(private taskService: TaskService) {}

  deleteTask(): void {
    this.taskService.deleteTask(this.task);
    this.taskDeleted.emit();
  }
}
