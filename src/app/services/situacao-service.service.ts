import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoModel } from '../models/ServicoModel';

@Injectable({
   providedIn: 'root',
})
export class SituacaoService {
   url = 'http://localhost:8080/situacao';

   constructor(private http: HttpClient) {}

   getAll(): Observable<ServicoModel[]> {
      return this.http.get<ServicoModel[]>(this.url + '/get-all', {
         headers: { 'Access-Control-Allow-Origin': '*' },
      });
   }

   getAllStatusSistemaByIdSituacao(id: number): Observable<ServicoModel[]> {
      return this.http.get<ServicoModel[]>(this.url + '/' + id, {
         headers: { 'Access-Control-Allow-Origin': '*' },
      });
   }
}
