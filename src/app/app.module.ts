import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

//services
import { PokemonsService } from './services/pokemons.service'

//routes
import { POKE_ROUTING } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { FoundPokemonComponent } from './components/found-pokemon/found-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonsComponent,
    PokemonInfoComponent,
    FoundPokemonComponent
  ],
  imports: [
    BrowserModule,
    POKE_ROUTING,
    HttpModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
