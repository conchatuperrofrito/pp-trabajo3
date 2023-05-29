import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCompoenteComponent } from './segundo-compoente.component';

describe('SegundoCompoenteComponent', () => {
  let component: SegundoCompoenteComponent;
  let fixture: ComponentFixture<SegundoCompoenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoCompoenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoCompoenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
