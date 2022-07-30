import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  public termino: string = ''
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe((res) =>{
      this.paises = res;
      console.log(this.paises)
    },(err)=>{
      this.hayError = true;
      this.paises = [];
    })
  };

  sugerencias(termino: string) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino
    this.paisService.buscarCapital(this.termino).subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0 ,5);
      },
      (error) => {
        this.hayError = true
        this.paisesSugeridos = [];
      }
    );
  };

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
