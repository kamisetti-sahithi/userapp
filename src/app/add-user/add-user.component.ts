import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor() { }

  user:User;
  addUser(form:any){
    let data=form.value;
    let username=data.username;
    let password=data.password;
    let phoneNo=data.phoneNo;
    this.user=new User(username,password,phoneNo);
  }

 

}
