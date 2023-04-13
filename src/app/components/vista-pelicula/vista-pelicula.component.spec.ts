import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPeliculaComponent } from './vista-pelicula.component';

describe('VistaPeliculaComponent', () => {
  let component: VistaPeliculaComponent;
  let fixture: ComponentFixture<VistaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
