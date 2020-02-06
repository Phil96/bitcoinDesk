import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinDiagramComponent } from './bitcoin-diagram.component';

describe('BitcoinDiagramComponent', () => {
  let component: BitcoinDiagramComponent;
  let fixture: ComponentFixture<BitcoinDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
