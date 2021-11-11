import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarConteudoComponent } from './criar-conteudo.component';

describe('CriarConteudoComponent', () => {
  let component: CriarConteudoComponent;
  let fixture: ComponentFixture<CriarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
