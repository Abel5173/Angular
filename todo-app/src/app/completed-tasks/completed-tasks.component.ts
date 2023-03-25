import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent {
  constructor(private servicesservice: ServicesService){}

  completedTasks = this.servicesservice.comlpetedTasks;
  
}
