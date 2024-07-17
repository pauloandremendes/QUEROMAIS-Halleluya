import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sheet } from '../cadastro/sheet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private http: HttpClient) {}

  createSheet(
    name: string,
    sobrenome: string,
    datanasci: string,
    telefone: string,
    local: string
  ): Observable<Sheet> {
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, {
        name,
        sobrenome,
        datanasci,
        telefone,
        local,
    });
  }


}