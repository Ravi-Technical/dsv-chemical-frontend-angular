import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBrand } from './global-brand';

describe('GlobalBrand', () => {
  let component: GlobalBrand;
  let fixture: ComponentFixture<GlobalBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
