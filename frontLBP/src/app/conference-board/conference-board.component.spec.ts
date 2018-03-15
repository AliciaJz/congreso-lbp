import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceBoardComponent } from './conference-board.component';

describe('ConferenceBoardComponent', () => {
  let component: ConferenceBoardComponent;
  let fixture: ComponentFixture<ConferenceBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
