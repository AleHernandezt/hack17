import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMedicinaComponent } from './form-medicina.component';

describe('FormMedicinaComponent', () => {
  let component: FormMedicinaComponent;
  let fixture: ComponentFixture<FormMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMedicinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
