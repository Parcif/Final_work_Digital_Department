import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Speaker } from './speaker.model';

@Injectable({
  providedIn: 'root'
})

export class SpeakerService 
{
  private tasks: Speaker[] = this.loadTasks();
  private tasksSubject: BehaviorSubject<Speaker[]> = new BehaviorSubject<Speaker[]>(this.tasks);

  constructor() { }

  addTask(task: Speaker): void 
  {
    this.tasks.push(task);
    this.updateTasks();
  }

  editTask(id: number, updatedTask: Speaker): void 
  {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.updateTasks();
    }
  }

  deleteTask(id: number): void 
  {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.updateTasks();
  }

  getTasks(): Observable<Speaker[]> 
  {
    return this.tasksSubject.asObservable();
  }

  private saveTasks(): void 
  {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadTasks(): Speaker[] 
  {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  private updateTasks(): void 
  {
    this.saveTasks();
    this.tasksSubject.next(this.tasks);
  }

}