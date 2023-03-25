import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private servicesservice: ServicesService){}

  completedTasks = this.servicesservice.comlpetedTasks
  tasks = this.servicesservice.tasks

}

