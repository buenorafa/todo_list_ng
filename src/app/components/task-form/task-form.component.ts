import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../models/task'; // Importa Task e TaskStatus

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  TaskStatus = TaskStatus; // Para usar no template
  tasks: Task[] = [];

  title: string = '';
  description: string = '';
  status: TaskStatus = TaskStatus.Pending; // Usando o enum TaskStatus

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    this.taskService.createTask(this.title, this.description, this.status);
    this.resetForm();
  }

  resetForm(): void {
    this.title = '';
    this.description = '';
    this.status = TaskStatus.Pending; // Reseta para o valor padrão
  }
}
