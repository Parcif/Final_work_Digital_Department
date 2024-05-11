import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplifiersComponent } from './amplifiers.component';

describe('AmplifiersComponent', () => {
  let component: AmplifiersComponent;
  let fixture: ComponentFixture<AmplifiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmplifiersComponent]
    });
    fixture = TestBed.createComponent(AmplifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
