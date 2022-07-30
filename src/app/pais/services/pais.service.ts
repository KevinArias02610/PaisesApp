import { HttpClient, HttpParams } from '@angular/common/http';
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

  get httpParams(){
    return new HttpParams().set(
      'fields', 'name,capital,alpha2Code,flag,population'
    );
  };

  get httpParams2(){
    return new HttpParams().set(
      'fields', 'name,capital,alpha2Code,flags,population'
    );
  }

  constructor(private htpp: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    debugger
    const url = `${this.apiUrl}/name/${termino}`;
    return this.htpp.get<Country[]>(url, { params: this.httpParams2});
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.htpp.get<Country[]>(url, { params: this.httpParams2});
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.htpp.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country2[]>{
    const url = `${this.apiUrlRegiones}/region/${region}`;
    return this.htpp.get<Country2[]>(url, { params: this.httpParams});
  }
}
