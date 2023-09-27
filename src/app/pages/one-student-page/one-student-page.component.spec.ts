import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStudentPageComponent } from './one-student-page.component';

describe('OneStudentPageComponent', () => {
  let component: OneStudentPageComponent;
  let fixture: ComponentFixture<OneStudentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneStudentPageComponent]
    });
    fixture = TestBed.createComponent(OneStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
