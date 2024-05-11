import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwoofersComponent } from './subwoofers.component';

describe('SubwoofersComponent', () => {
  let component: SubwoofersComponent;
  let fixture: ComponentFixture<SubwoofersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubwoofersComponent]
    });
    fixture = TestBed.createComponent(SubwoofersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
