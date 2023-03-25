import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private servicesservice: ServicesService){}
  task: string = ''

  addTask(){
    this.servicesservice.addTasks(this.task)
    this.task = ''
  }
}
