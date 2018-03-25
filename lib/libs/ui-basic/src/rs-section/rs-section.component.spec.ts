import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsSectionComponent } from './rs-section.component';

describe('RsSectionComponent', () => {
  let component: RsSectionComponent;
  let fixture: ComponentFixture<RsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
