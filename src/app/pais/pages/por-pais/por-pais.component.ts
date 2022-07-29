import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  public termino: string = ''
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((res) =>{
      this.paises = res;
      console.log(this.paises)
    },(err)=>{
      this.hayError = true;
      this.paises = [];
    })
  }
}
