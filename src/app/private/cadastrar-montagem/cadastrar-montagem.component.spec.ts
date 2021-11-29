import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMontagemComponent } from './cadastrar-montagem.component';

describe('CadastrarMontagemComponent', () => {
  let component: CadastrarMontagemComponent;
  let fixture: ComponentFixture<CadastrarMontagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMontagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMontagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
