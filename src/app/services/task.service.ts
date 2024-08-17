import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../models/task'; // Ajuste o caminho conforme necessário
import { DATA } from '../shared/data'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = DATA;

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string, status: TaskStatus): void {
    let task = new Task(title, description, status);
    this.tasks.push(task);
  }

  //   updateTask(updatedTask: Task): void {
  //     const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
  //     if (index > -1) {
  //       this.tasks[index] = updatedTask;
  //     }
  //   }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
