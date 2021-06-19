import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosplanillaComponent } from './puestosplanilla.component';

describe('PuestosplanillaComponent', () => {
  let component: PuestosplanillaComponent;
  let fixture: ComponentFixture<PuestosplanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestosplanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestosplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
