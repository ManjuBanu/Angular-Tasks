import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
// import { TasksComponent } from "./tasks/tasks.component";
// import { CardComponent } from "./shared/card/card.component";
// import { NewTaskComponent } from "./tasks/new-task/new-task.component";
// import { TaskComponent } from "./tasks/task/task.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
// import { TasksModule } from "./tasks/tasks.module";

// import { DatePipe } from "@angular/common"; // u don't have to import bcz it will be unlocked by browserModule

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    UserComponent,
    // CardComponent, // we moved to sharedModule
    // TasksComponent, // we moved to TasksModule
    // TaskComponent,
    // NewTaskComponent
  ],
  bootstrap:[AppComponent],  //to tell angular that this is the root component, u can add multiple root component
  imports:[BrowserModule, SharedModule, TasksModule] // to keep these as standalone compo , if these are all module based u can import in declaration part
})
export class AppModule {}
