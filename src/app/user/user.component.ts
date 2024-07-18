import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// we don't ned random user instead we need all
// const randomUser = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{
  // means it is settable from outside also
  //required true means , the value must be set
  //Decerator approach

  //convert this into type object
// @Input({required: true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input() name!:string;

@Input({required: true}) user!: User;
@Input({required: true}) selected!: boolean;

@Output() select = new EventEmitter();
// @Output() select = new EventEmitter<string>();



// this will not give signals will give custom event only , input only create signal
// use of output function is if you r using input function then u can use output function then u can ignore decerators completely
// select = output<string>();


//signal will be added by default , u can set default value if only u don't pass required
// avatar = input.required<string>();
// name = input.required<string>();


  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  // imagePath = computed(() =>{
  //  return 'assets/users/' + this.avatar()
  // })

  onSelectUser(){
    this.select.emit(this.user.id)
  }
}

// with signals and random user(one only)
// export class UserComponent {
//   // selectedUser = signal(DUMMY_USERS[randomUser])

//   //with signal this is how you should use getter
//   // imagePath = computed(() =>'assets/users/' + this.selectedUser().avatar )

//   //without signal
//   // get imagePath(){
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }

//   onSelectUser () {
//     //to recalculate randomUser every time
//     // const randomUser = Math.floor(Math.random() * DUMMY_USERS.length)
//     // //this is the way we are using signal and setting that
//     // this.selectedUser.set(DUMMY_USERS[randomUser]);
//   }
// }
