import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivImageSComponent } from './div-image-s.component';

describe('DivImageSComponent', () => {
  let component: DivImageSComponent;
  let fixture: ComponentFixture<DivImageSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivImageSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivImageSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
