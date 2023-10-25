import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosBalloonComponent } from './resultados-balloon.component';

describe('ResultadosBalloonComponent', () => {
  let component: ResultadosBalloonComponent;
  let fixture: ComponentFixture<ResultadosBalloonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosBalloonComponent]
    });
    fixture = TestBed.createComponent(ResultadosBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
