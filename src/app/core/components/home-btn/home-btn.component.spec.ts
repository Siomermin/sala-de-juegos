import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBtnComponent } from './home-btn.component';

describe('HomeBtnComponent', () => {
  let component: HomeBtnComponent;
  let fixture: ComponentFixture<HomeBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBtnComponent]
    });
    fixture = TestBed.createComponent(HomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
