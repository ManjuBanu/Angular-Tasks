import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required: true}) userName!:string;
  // @Input({}) userName?:string;
  @Input({required: true}) userName:string | undefined; //union types

  @Input({required: true}) userId!: string;
 isAddTask = false;

 //will implement dependency injection instead of this
//  private tasksService = new TasksService();

// private tasksService: TasksService;
// constructor(tasksService: TasksService){
//   this.tasksService= tasksService;
// }
constructor( private tasksService: TasksService){}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onAddTask(){
    this.isAddTask = true;
  }

  onCloseAddTask () {
    this.isAddTask = false;
  }
}
