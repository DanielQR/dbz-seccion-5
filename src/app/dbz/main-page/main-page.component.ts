import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'maestro Roshi',
    poder: 1000
  }

  // imprimiendo el servicio

  constructor (){

  }




  // cambiarNombre( event: any ){
  // console.log( event.target.value );
  // }





}
