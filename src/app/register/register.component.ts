import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;
  title: any;
public reg:any;
public s1:any;
    constructor(private formBuilder: FormBuilder,private data:UserService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
            lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
            confirmPassword: ['', Validators.required],
            phoneNumber:['',[Validators.required,Validators.pattern('^[6789][0-9]{9}')]]
        }, 
         {
             validator: this.MustMatch('password', 'confirmPassword')
         }
        );
        if(localStorage.getItem("myData")==null){
          localStorage.setItem("myData",JSON.stringify(this.data.get()));
        }
        this.s1=localStorage.getItem("myData");
        this.reg=JSON.parse(this.s1);
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls}
MustMatch(controlName:string,matchingControlName:string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        // return if another validator has already found an error on the matchingControl
        return
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
    }
}
    onSubmit() {
      this.data.set(this.registerForm.value);
      //alert(this.registerForm.value);
      this.reg.push(this.registerForm.value);
      console.log("twitter",this.data.get());
        this.submitted = true;
        const userDetails = [];
        console.log("qqqq",this.registerForm.value);
        userDetails.push(this.registerForm.value);
        const jsonData = JSON.stringify(userDetails);
        window.localStorage.setItem('myData',JSON.stringify(this.reg));
        // localStorage.setItem('myData', jsonData);
       var get =  localStorage.getItem('myData');
       console.log("stored data",get);
// console.warn(this.registerForm.value)
//         // stop here if form is invalid
//         if (this.registerForm.invalid) {
//             return;
//         }
if(this.registerForm.valid){
alert('Hii! Successfully Registered');
}
    }

    onLogout()
    {
      localStorage.removeItem("myData");
      
    }
}


