import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  public termino: string = ''

  constructor(private paisService: PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(res =>{
      console.log(res)
    })
  }
}
