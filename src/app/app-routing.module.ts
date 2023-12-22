import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { ListaCardsComponent } from './views/lista-cards/lista-cards.component';

const routes: Routes = [
   { path: '', title: 'Inicio', component: ListaCardsComponent },
   {
      path: 'details/:idRegistroSituacao',
      title: 'Detalhes',
      component: DetailsComponent,
   },
   { path: '**', redirectTo: '' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
