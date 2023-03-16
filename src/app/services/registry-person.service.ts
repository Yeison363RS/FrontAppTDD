import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Person } from '../models/models-hoobies';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
}) 

export class RegistryPersonService {
  options={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http:HttpClient,private router:Router,private cookieServ:CookieService) { }
  
  registryPerson(person:Person){
    this.http.post<Person>('http://localhost:1367/people/savePerson', 
    person,this.options).subscribe({
        next: data => {
          console.log("salio bien"+data)
        },
        error: error => {
            console.error('Ha ocurrido un error! ', error.message);
          }
        });
  }

  loginUser(person: Person) {
    if(person.name!=undefined){
      console.log('Se ha iniciado Sesión')
      this.cookieServ.set("isLogin","true");
      this.router.navigate([""]);
    }else{
      console.log('Error al iniciar sesion')
    }
  }

  logoutUser(){
    this.cookieServ.set("isLogin","false");
    this.router.navigate([""]);
  }

  isLoginUser(){
    console.log(this.cookieServ.get("isLogin"))
    return  this.cookieServ.get("isLogin")==="true"?true:false;
  }
}
    
