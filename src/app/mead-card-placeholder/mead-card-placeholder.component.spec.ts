import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadCardPlaceholderComponent } from './mead-card-placeholder.component';

describe('MeadCardPlaceholderComponent', () => {
  let component: MeadCardPlaceholderComponent;
  let fixture: ComponentFixture<MeadCardPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeadCardPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadCardPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
