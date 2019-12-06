import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibidoComponent } from './prohibido.component';

describe('ProhibidoComponent', () => {
  let component: ProhibidoComponent;
  let fixture: ComponentFixture<ProhibidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
