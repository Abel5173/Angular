import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  tasks: string[] = []
  comlpetedTasks: string[] = []
  constructor() { }

  getTasks(){
    return this.tasks
  }
  addTasks(task: string){
    this.tasks.push(task)
  }
  completeTask(task: string){
    this.comlpetedTasks.push(task)
    console.log(task);
    
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }
  completedTask(task: string){
  }
  deleteTask(task: string){
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }
}
