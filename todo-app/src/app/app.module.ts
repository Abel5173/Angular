import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ServicesService } from './services/services.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    CompletedTasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
