import { PokemonsService, PokemonRules } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:any[] = [];
  constructor( private _pokemons: PokemonsService) { }

  ngOnInit() {
    this.pokemons = this._pokemons.obtainPokemons();
     
  }

}
