import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinConverterComponent } from './bitcoin-converter.component';

describe('BitcoinConverterComponent', () => {
  let component: BitcoinConverterComponent;
  let fixture: ComponentFixture<BitcoinConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
