import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor() { }
  user:User;
  findUser(form:any){
    let data=form.value;
    let username=form.username;
    let password=form.password;
    console.log("login="+this.user);
  }



}
