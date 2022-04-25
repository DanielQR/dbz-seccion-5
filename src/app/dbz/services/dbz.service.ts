import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 13000
    }
  ];

  get personajes() {
    return [...this._personajes];
  }

  constructor() {}


  agregarPersonaje( pj: Personaje ) {
    this._personajes.push( pj );
  }

}
