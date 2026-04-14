import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAnAppointment } from './book-an-appointment';

describe('BookAnAppointment', () => {
  let component: BookAnAppointment;
  let fixture: ComponentFixture<BookAnAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAnAppointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAnAppointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
