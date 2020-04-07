import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeComponentComponent } from './get-employee-component.component';

describe('GetEmployeeComponentComponent', () => {
  let component: GetEmployeeComponentComponent;
  let fixture: ComponentFixture<GetEmployeeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
