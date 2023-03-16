import { Component, OnInit } from '@angular/core';
import { Hoobie } from '../models/models-hoobies';
import {NgForm} from '@angular/forms';
import { HoobiesServiceService } from '../services/hoobies-service.service';

@Component({
  selector: 'app-hoobies-update',
  templateUrl: './hoobies-update.component.html',
  styleUrls: ['./hoobies-update.component.css']
})
export class HoobiesUpdateComponent implements OnInit {

  constructor(private service:HoobiesServiceService) { }
  
  formHoobie=undefined;

  ngOnInit(): void {

  }

  recoverDataHoobie(formHoobie:NgForm) {
    let hoobie = new Hoobie();
    hoobie.nameHoobie=formHoobie.value.nameHoobie;
    this.service.addNeHoobie(hoobie,1);
  }
}
