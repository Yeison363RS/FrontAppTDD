import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsUpdateComponent } from './groups-update.component';

describe('GroupsUpdateComponent', () => {
  let component: GroupsUpdateComponent;
  let fixture: ComponentFixture<GroupsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
