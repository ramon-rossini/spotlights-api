import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConteudoComponent } from './listar-conteudo.component';

describe('ListarConteudoComponent', () => {
  let component: ListarConteudoComponent;
  let fixture: ComponentFixture<ListarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
