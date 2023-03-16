import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hoobie, Person } from '../models/models-hoobies';

@Injectable({
  providedIn: 'root'
})
export class HoobiesServiceService {
  constructor(private http: HttpClient) { }
  
  options={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  addNeHoobie(hoobie:Hoobie,idPerson:number){
    this.http.post<Hoobie>('http://localhost:1367/people/addHoobie/'+idPerson, 
    hoobie,this.options).subscribe({
        next: data => {
            console.log("salio bien"+data)
            //to do successfull request
        },
        error: error => {
            console.error('Ha ocurrido un error! ', error.message);
        }
    });
  }

}
