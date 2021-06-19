import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearclaseComponent } from './crearclase.component';

describe('CrearclaseComponent', () => {
  let component: CrearclaseComponent;
  let fixture: ComponentFixture<CrearclaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearclaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearclaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
