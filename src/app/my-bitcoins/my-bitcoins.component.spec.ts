import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBitcoinsComponent } from './my-bitcoins.component';

describe('MyBitcoinsComponent', () => {
  let component: MyBitcoinsComponent;
  let fixture: ComponentFixture<MyBitcoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBitcoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBitcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
