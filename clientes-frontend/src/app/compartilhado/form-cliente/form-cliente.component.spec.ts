import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuarioComponent } from './form-cliente.component';

describe('FormUsuarioComponent', () => {
  let component: FormUsuarioComponent;
  let fixture: ComponentFixture<FormUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
