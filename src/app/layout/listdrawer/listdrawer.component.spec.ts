import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdrawerComponent } from './listdrawer.component';

describe('ListdrawerComponent', () => {
  let component: ListdrawerComponent;
  let fixture: ComponentFixture<ListdrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
