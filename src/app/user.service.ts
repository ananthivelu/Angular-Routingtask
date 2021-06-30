
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  value=[
    {
      email:"anu99@gmail.com",password:"anu1999"
    }
  ];
  
  get(){
    return this.value;
  }
  set(userDetails:any){
    let sample = {
      email:userDetails.email,password:userDetails.password
    }
    this.value.push(sample);
    console.log("new value",this.value);

  }

 constructor() { }
  
}

