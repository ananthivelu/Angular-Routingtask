import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Camp1Component } from './camp1/camp1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Guard1Guard } from './guard1.guard';

const routes: Routes = [
  {path:'camp1',component:Camp1Component,canActivate:[Guard1Guard]},
  {path:'login',component:LoginComponent,},
  {path:'register',component:RegisterComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
