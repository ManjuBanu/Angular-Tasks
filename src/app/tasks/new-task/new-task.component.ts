import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter();
  //for adding user entered task as obj
  // @Output() add = new EventEmitter<NewTaskData>();

  private tasksService = inject(TasksService);

  enteredTitle='';
  enteredSummary ='';
  enteredDate = '';

  onCancel() {
    this.close.emit()
  }

  //before dependancy injection
  // onSubmit () {
  //   this.add.emit({
  //     title : this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate
  //   })
  // }

  onSubmit() {
    this.tasksService.addTask({
      title : this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)

    this.close.emit()
  }
}
