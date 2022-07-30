import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Country } from '../interfaces/pais.interface';
import { Country2 } from '../interfaces/pais2.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlRegiones: string = 'https://restcountries.com/v2';

  constructor(private htpp: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.htpp.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.htpp.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.htpp.get<Country>(url);
  }

  buscarRegion(termino: string): Observable<Country2[]>{
    const url = `${this.apiUrlRegiones}/regionalbloc/${termino}`;
    return this.htpp.get<Country2[]>(url);
  }
}
