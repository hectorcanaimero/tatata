import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoTwoComponent } from './promocao-two.component';

describe('PromocaoTwoComponent', () => {
  let component: PromocaoTwoComponent;
  let fixture: ComponentFixture<PromocaoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
