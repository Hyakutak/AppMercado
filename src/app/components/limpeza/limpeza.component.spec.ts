import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpezaComponent } from './limpeza.component';

describe('LimpezaComponent', () => {
  let component: LimpezaComponent;
  let fixture: ComponentFixture<LimpezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
