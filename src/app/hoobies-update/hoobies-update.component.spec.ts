import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoobiesUpdateComponent } from './hoobies-update.component';

describe('HoobiesUpdateComponent', () => {
  let component: HoobiesUpdateComponent;
  let fixture: ComponentFixture<HoobiesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoobiesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoobiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
