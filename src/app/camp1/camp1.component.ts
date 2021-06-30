import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
@Component({
  selector: 'app-camp1',
  templateUrl: './camp1.component.html',
  styleUrls: ['./camp1.component.css']
})

export class Camp1Component implements OnInit {

  data!: any;
  title = 'Task1';
  constructor(private service1Service:Service1Service) { 

  }
      ngOnInit()
      {
        //this.data = this.service1Service.getData();

        this.service1Service.getData().subscribe((employee)=>(this.data=employee))
      }
    }
  
 
  


