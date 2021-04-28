import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeCondorComponent } from './clube-condor.component';

describe('ClubeCondorComponent', () => {
  let component: ClubeCondorComponent;
  let fixture: ComponentFixture<ClubeCondorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubeCondorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeCondorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
