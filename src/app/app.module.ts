import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './views/components/card/card.component';
import { DetailsComponent } from './views/details/details.component';
import { ListaCardsComponent } from './views/lista-cards/lista-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListaCardsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
