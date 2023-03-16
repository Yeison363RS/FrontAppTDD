import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/models-hoobies';

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {
  options={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  addGroupToUser(group:Group,idUser:Number){
    this.http.post<Group>("http://localhost:1367/people/addGroup/"+idUser,group,this.options).subscribe({
      next: data => {
          console.log("salio bien"+data)
      },
      error: error => {
          console.error('Ha ocurrido un error! ', error.message);
      }
    });
  }
}
