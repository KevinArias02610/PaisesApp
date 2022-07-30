import { Component, Input, OnInit } from '@angular/core';
import { Country2 } from '../../interfaces/pais2.interface';

@Component({
  selector: 'app-pais-tabla2',
  templateUrl: './pais-tabla2.component.html'
})
export class PaisTabla2Component implements OnInit {
  @Input() paises: Country2[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
