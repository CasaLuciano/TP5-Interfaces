import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { UneteComponent } from './unete/unete.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
import { ColaborarComponent } from './colaborar/colaborar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'unete', component: UneteComponent },
  { path: 'acceso', component: AccesoComponent },
  { path: 'recuperar', component: RecuperarContraseniaComponent },
  { path: 'colaborar', component: ColaborarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }