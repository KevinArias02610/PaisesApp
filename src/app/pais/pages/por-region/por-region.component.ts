import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { Country2 } from '../../interfaces/pais2.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  public regiones: string[] = ['europe','americas','africa','asia','oceania'];
  public regionActiva: string = '';
  public paises: Country2[] = [];
  public hayError: boolean = false;

  getClase(region: string){
    return (region === this.regionActiva) ? 'btn btn-secondary' : 'btn btn-outline-secondary'
  }

  constructor(
    private paisService: PaisService
  ) { }

  activarRegion(region: string){
    this.regionActiva = region;
    this.hayError = false
    this.paisService.buscarRegion(region).subscribe((res)=>{
      this.paises = res
      console.log(res)
    },(err)=>{
      this.hayError = true;
      this.paises = [];
    })
  }

}
