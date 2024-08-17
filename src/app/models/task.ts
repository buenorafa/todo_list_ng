export enum TaskStatus {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

export class Task {
  private static nextId = 0;
  id: number;
  title: string;
  description: string;
  taskType: string;
  status: TaskStatus;
  creationDate: Date;
  completionDate?: Date;

  constructor(title: string, description: string, status: TaskStatus) {
    this.id = Task.nextId++;
    this.title = title;
    this.description = description;
    this.taskType = '';
    this.status = status;
    this.creationDate = new Date();
  }
  startTask(): void {
    this.status = TaskStatus.InProgress;
  }
  completeTask(): void {
    this.status = TaskStatus.Completed;
    this.completionDate = new Date();
  }
}
