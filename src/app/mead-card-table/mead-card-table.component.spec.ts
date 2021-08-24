import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadCardTableComponent } from './mead-card-table.component';

describe('MeadCardTableComponent', () => {
  let component: MeadCardTableComponent;
  let fixture: ComponentFixture<MeadCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeadCardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
