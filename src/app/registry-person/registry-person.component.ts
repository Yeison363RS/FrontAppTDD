import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/models-hoobies';
import { RegistryPersonService } from '../services/registry-person.service';

@Component({
  selector: 'app-registry-person',
  templateUrl: './registry-person.component.html',
  styleUrls: ['./registry-person.component.css']
})
export class RegistryPersonComponent implements OnInit {

  formRegPerson=undefined;
  
  constructor(private service:RegistryPersonService) { }

  ngOnInit(): void {
  }
  recoverDataPerson(formRegPerson:NgForm) {
    let person = new Person();
    person.name=formRegPerson.value.nameHoobie;
    person.lastName=formRegPerson.value.lastName;
    person.country=formRegPerson.value.country;
    person.department=formRegPerson.value.department;
    person.city=formRegPerson.value.city
    this.service.registryPerson(person);
  }

}
