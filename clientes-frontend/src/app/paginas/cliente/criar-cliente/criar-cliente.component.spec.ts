import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUsuarioComponent } from './criar-cliente.component';

describe('CriarUsuarioComponent', () => {
  let component: CriarUsuarioComponent;
  let fixture: ComponentFixture<CriarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
