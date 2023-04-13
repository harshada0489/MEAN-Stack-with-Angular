import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobuttonsComponent } from './twobuttons.component';

describe('TwobuttonsComponent', () => {
  let component: TwobuttonsComponent;
  let fixture: ComponentFixture<TwobuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwobuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
