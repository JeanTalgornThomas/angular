import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilListViewComponent } from './appareil-list-view.component';

describe('AppareilListViewComponent', () => {
  let component: AppareilListViewComponent;
  let fixture: ComponentFixture<AppareilListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
