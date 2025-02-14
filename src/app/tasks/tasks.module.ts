import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
// import { BrowserModule } from "@angular/platform-browser"; //
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TasksComponent,TaskComponent,NewTaskComponent],
  exports:[TasksComponent],
  imports:[CommonModule,FormsModule, SharedModule]
})
export class TasksModule {}
