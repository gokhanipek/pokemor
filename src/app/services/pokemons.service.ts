import { Injectable } from '@angular/core';

export interface PokemonRules {
    id: number;
    name: string;
    types: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemons: any[] = [
    { "id": 1,"name": "Bulbasaur", "types": ["Grass", "Poison"] },
    { "id": 2,"name": "Ivysaur", "types": ["Grass", "Poison"] },
    { "id": 3,"name": "Venusaur", "types": ["Grass", "Poison"] },
    { "id": 4,"name": "Charmander", "types": ["Fire"] },
    { "id": 5,"name": "Charmeleon", "types": ["Fire"] },
    { "id": 6,"name": "Charizard", "types": ["Fire", "Flying"] },
    { "id": 7,"name": "Squirtle", "types": ["Water"] },
    { "id": 8,"name": "Wartortle", "types": ["Water"] },
    { "id": 9,"name": "Blastoise", "types": ["Water"] },
    { "id": 10,"name": "Caterpie", "types": ["Bug"] },
    { "id": 11,"name": "Metapod", "types": ["Bug"] },
    { "id": 12,"name": "Butterfree", "types": ["Bug", "Flying"] },
    { "id": 13,"name": "Weedle", "types": ["Bug", "Poison"] },
    { "id": 14,"name": "Kakuna", "types": ["Bug", "Poison"] },
    { "id": 15,"name": "Beedrill", "types": ["Bug", "Poison"] },
    { "id": 16,"name": "Pidgey", "types": ["Normal", "Flying"] },
    { "id": 17,"name": "Pidgeotto", "types": ["Normal", "Flying"] },
    { "id": 18,"name": "Pidgeot", "types": ["Normal", "Flying"] },
    { "id": 19,"name": "Rattata", "types": ["Normal"] },
    { "id": 20,"name": "Raticate", "types": ["Normal"] },
    { "id": 21,"name": "Spearow", "types": ["Normal", "Flying"] },
    { "id": 22,"name": "Fearow", "types": ["Normal", "Flying"] },
    { "id": 23,"name": "Ekans", "types": ["Poison"] },
    { "id": 24,"name": "Arbok", "types": ["Poison"] },
    { "id": 25,"name": "Pikachu", "types": ["Electric"] },
    { "id": 26,"name": "Raichu", "types": ["Electric"] },
    { "id": 27,"name": "Sandshrew", "types": ["Ground"] },
    { "id": 28,"name": "Sandslash", "types": ["Ground"] },
    { "id": 29,"name": "Nidoran♀", "types": ["Poison"] },
    { "id": 30,"name": "Nidorina", "types": ["Poison"] },
    { "id": 31,"name": "Nidoqueen", "types": ["Poison", "Ground"] },
    { "id": 32,"name": "Nidoran♂", "types": ["Poison"] },
    { "id": 33,"name": "Nidorino", "types": ["Poison"] },
    { "id": 34,"name": "Nidoking", "types": ["Poison", "Ground"] },
    { "id": 35,"name": "Clefairy", "types": ["Fairy"] },
    { "id": 36,"name": "Clefable", "types": ["Fairy"] },
    { "id": 37,"name": "Vulpix", "types": ["Fire"] },
    { "id": 38,"name": "Ninetales", "types": ["Fire"] },
    { "id": 39,"name": "Jigglypuff", "types": ["Normal", "Fairy"] },
    { "id": 40,"name": "Wigglytuff", "types": ["Normal", "Fairy"] },
    { "id": 41,"name": "Zubat", "types": ["Poison", "Flying"] },
    { "id": 42,"name": "Golbat", "types": ["Poison", "Flying"] },
    { "id": 43,"name": "Oddish", "types": ["Grass", "Poison"] },
    { "id": 44,"name": "Gloom", "types": ["Grass", "Poison"] },
    { "id": 45,"name": "Vileplume", "types": ["Grass", "Poison"] },
    { "id": 46,"name": "Paras", "types": ["Bug", "Grass"] },
    { "id": 47,"name": "Parasect", "types": ["Bug", "Grass"] },
    { "id": 48,"name": "Venonat", "types": ["Bug", "Poison"] },
    { "id": 49,"name": "Venomoth", "types": ["Bug", "Poison"] },
    
];

obtainPokemons() {
  return this.pokemons;  
}

obtainPokemon(id: number){
  let pokeArr = [];
  for(let pokemon of this.pokemons){
    if(pokemon.id == id) {
      pokeArr.push(pokemon);
    }
  }

  return pokeArr;
}


searchPokemon( find: string ){
  let pokeArr = [];
  find = find.toLowerCase();
  for (let pokemon of this.pokemons) {
    let name = pokemon.name.toLowerCase();
    if(name.indexOf(find) >= 0){
      pokeArr.push(pokemon);
    }
  }

  return pokeArr;
}

  constructor() { }
}
