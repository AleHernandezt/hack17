import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTratamientoComponent } from './resumen-tratamiento.component';

describe('ResumenTratamientoComponent', () => {
  let component: ResumenTratamientoComponent;
  let fixture: ComponentFixture<ResumenTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenTratamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
