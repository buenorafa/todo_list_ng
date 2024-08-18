import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  deleteTask(): void {
    this.taskService.deleteTask(this.task);
    this.taskDeleted.emit();
  }
}
