import { Component, Input } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = []
  task: string = ''
  constructor(private servicesservice: ServicesService ){}
  
  ngOnInit(){
    this.tasks = this.servicesservice.getTasks()
  }
  completedTask(task: string){
    this.servicesservice.completeTask(task)
  }
  deleteTask(task: string){
    this.servicesservice.deleteTask(this.task)
  }
}
