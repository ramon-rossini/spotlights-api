import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { HeaderComponent } from './componentes/header/header.component';

import { UsuariosService } from './usuarios.service';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { CriarConteudoComponent } from './componentes/criar-conteudo/criar-conteudo.component';
import { ListarConteudoComponent } from './componentes/listar-conteudo/listar-conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    PerfilComponent,
    AdminComponent,
    CriarConteudoComponent,
    ListarConteudoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }