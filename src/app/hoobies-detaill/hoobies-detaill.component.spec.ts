import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoobiesDetaillComponent } from './hoobies-detaill.component';

describe('HoobiesDetaillComponent', () => {
  let component: HoobiesDetaillComponent;
  let fixture: ComponentFixture<HoobiesDetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoobiesDetaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoobiesDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
