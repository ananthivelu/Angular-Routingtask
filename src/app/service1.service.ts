import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this
            .http
            .get(`${this.url}/employeedetails`);
         
        }
}

  const employeedetails=[{
    id:1,
    firstname:"Ani",
    lastname:"John",
    designation:"Developer",
    age:24,
    address:"57,Bazarstreet,Chennai"
  },
  {
    id:2,
    firstname:"Barath",
    lastname:"Bala",
    designation:"Developer",
    age:25,
    address:"14,Nehru street,Erode"
  },
  {
    id:3,
    firstname:"Charu",
    lastname:"Vasu",
    designation:"Manager",
    age:27,
    address:"71,Kgf street,Chennai"
  },
  {
    id:4,
    firstname:"Diva",
    lastname:"Daas",
    designation:"Tester",
    age:25,
    address:"16,Mega street,Coimbatore"
  },
  {
    id:5,
    firstname:"Fazil",
    lastname:"mohil",
    designation:"Developer",
    age:24,
    address:"12,Sheela Street,Bangalore"
  },
  {
    id:6,
    firstname:"Hassile",
    lastname:"Fazile",
    designation:"Project Manager",
    age:25,
    address:"22,Avalanche street,Chennai"
  },
  {
    id:7,
    firstname:"Jeeva",
    lastname:"Kevin",
    designation:"Tester",
    age:25,
    address:"71, Nellai street,Coimbatore"
  },
  {
    id:8,
    firstname:"Jason",
    lastname:"Sanjay",
    designation:"Developer",
    age:24,
    address:"60,Megha street,Chennai"
  },
  {
    id:9,
    firstname:"Mano",
    lastname:"Bala",
    designation:"Tester",
    age:26,
    address:"89A,Manalii street,Kerala"
  },
  {
    id:10,
    firstname:"Thomas",
    lastname:"Ezhil",
    designation:"Trainer",
    age:28,
    address:"13,Penquin street,Chennai"
  }
];


  /*getData()
   {
  return this.employeedetails;
  
}*/





  
