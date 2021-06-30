import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camp1Component } from './camp1/camp1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule}from '@angular/forms';
import { Guard1Guard } from './guard1.guard';

import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Camp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers:  [Guard1Guard,Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
