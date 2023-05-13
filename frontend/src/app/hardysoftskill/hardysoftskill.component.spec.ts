import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftskillComponent } from './hardysoftskill.component';

describe('HardysoftskillComponent', () => {
  let component: HardysoftskillComponent;
  let fixture: ComponentFixture<HardysoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
