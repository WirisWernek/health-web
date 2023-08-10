import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
	{path: "", title: "Inicio",component: ListaCardsComponent},
	{path: "details/:idRegistroSituacao", title: "Detalhes",component: DetailsComponent},
	{ path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
