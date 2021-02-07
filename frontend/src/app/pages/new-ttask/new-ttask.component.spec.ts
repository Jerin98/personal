import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTtaskComponent } from './new-ttask.component';

describe('NewTtaskComponent', () => {
  let component: NewTtaskComponent;
  let fixture: ComponentFixture<NewTtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
