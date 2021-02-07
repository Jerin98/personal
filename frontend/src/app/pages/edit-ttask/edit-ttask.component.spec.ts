import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTtaskComponent } from './edit-ttask.component';

describe('EditTtaskComponent', () => {
  let component: EditTtaskComponent;
  let fixture: ComponentFixture<EditTtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
