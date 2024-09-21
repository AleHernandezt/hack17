import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFundacionComponent } from './gestion-fundacion.component';

describe('GestionFundacionComponent', () => {
  let component: GestionFundacionComponent;
  let fixture: ComponentFixture<GestionFundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFundacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionFundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
