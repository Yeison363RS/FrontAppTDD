import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from '../models/models-hoobies';
import { GroupsServiceService } from '../services/groups-service.service';

@Component({
  selector: 'app-groups-update',
  templateUrl: './groups-update.component.html',
  styleUrls: ['./groups-update.component.css']
})
export class GroupsUpdateComponent implements OnInit {

  formGroup=undefined

  constructor(private service:GroupsServiceService) { }

  ngOnInit(): void {
  }
  recoverDataGroup(formGroup:NgForm){
    let group=new Group();
    group.nameGroup=formGroup.value.nameGroup;
    group.location=formGroup.value.location;
    this.service.addGroupToUser(group,1);
  }
}
