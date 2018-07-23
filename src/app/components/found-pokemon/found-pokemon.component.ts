import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-found-pokemon',
  templateUrl: './found-pokemon.component.html',
  styleUrls: ['./found-pokemon.component.css']
})
export class FoundPokemonComponent implements OnInit {
  
  pokemon:any[] = [];
  constructor( private params: ActivatedRoute, private pokemons: PokemonsService ) {
    this.params.params.subscribe(params => {
      this.pokemon = this.pokemons.searchPokemon(params['name']);
    })
   }

  ngOnInit() {
  }

}
