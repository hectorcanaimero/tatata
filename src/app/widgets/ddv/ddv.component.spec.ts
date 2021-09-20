import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdvComponent } from './ddv.component';

describe('DdvComponent', () => {
  let component: DdvComponent;
  let fixture: ComponentFixture<DdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
