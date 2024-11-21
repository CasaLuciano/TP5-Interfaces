import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { UneteComponent } from './unete/unete.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { ColaborarComponent } from './colaborar/colaborar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    NoticiasComponent,
    UneteComponent,
    AccesoComponent,
    RecuperarContraseniaComponent,
    ColaborarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
