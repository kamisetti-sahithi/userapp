import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [
  {path:'add-user', component:AddUserComponent},
  {path:'login',component:LoginComponent}
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
