import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadCardComponent } from './mead-card.component';

describe('MeadCardComponent', () => {
  let component: MeadCardComponent;
  let fixture: ComponentFixture<MeadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeadCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
