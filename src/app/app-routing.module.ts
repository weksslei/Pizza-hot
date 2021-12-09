import { LoginComponent } from './components/usuario/login/login';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { CadastroComponent } from './components/usuario/cadastro/cadastro';

const routes: Routes = [
  {
     path: "login", component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cards', component: CardsComponent
  },
  {
    path: 'ofertas', component: OfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
