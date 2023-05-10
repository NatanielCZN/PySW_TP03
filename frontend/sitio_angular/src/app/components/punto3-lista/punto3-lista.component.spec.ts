import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3ListaComponent } from './punto3-lista.component';

describe('Punto3ListaComponent', () => {
  let component: Punto3ListaComponent;
  let fixture: ComponentFixture<Punto3ListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto3ListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto3ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
