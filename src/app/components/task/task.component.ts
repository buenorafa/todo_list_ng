import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private taskService: TaskService) {}

  // addTask(title: string, description: string, status: string): void {
  //   this.taskService.createTask(title, description, status);
  // }
}
