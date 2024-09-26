import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCompBComponent } from './sibling-comp-b.component';

describe('SiblingCompBComponent', () => {
  let component: SiblingCompBComponent;
  let fixture: ComponentFixture<SiblingCompBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingCompBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingCompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
