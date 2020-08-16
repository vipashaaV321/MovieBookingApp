import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebookingComponent } from './moviebooking.component';

describe('MoviebookingComponent', () => {
  let component: MoviebookingComponent;
  let fixture: ComponentFixture<MoviebookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviebookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
