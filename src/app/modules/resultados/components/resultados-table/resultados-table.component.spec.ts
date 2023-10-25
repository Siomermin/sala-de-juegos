import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosTableComponent } from './resultados-table.component';

describe('ResultadosTableComponent', () => {
  let component: ResultadosTableComponent;
  let fixture: ComponentFixture<ResultadosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosTableComponent]
    });
    fixture = TestBed.createComponent(ResultadosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
