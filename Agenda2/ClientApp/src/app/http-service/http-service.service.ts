import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getRegistro } from '../models/registro.model'
@Injectable()
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  postRegistro(data) {
    return this.http.post('',data)
  }

  getRegistros() {
    return this.http.get<Array<getRegistro>>('')
  }
}
