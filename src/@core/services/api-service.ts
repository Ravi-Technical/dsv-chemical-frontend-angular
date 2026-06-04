import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/env';
import { Observable } from 'rxjs';
import { API_URLS } from '../apiUrls';
import { API_RESPONSE } from '../../share/commonModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_BASE_URL = environment.apiUrl;
  constructor(private _http: HttpClient) { }
  
  GET_ALL_PRODUCTS():Observable<API_RESPONSE<[]>> {
     return this._http.get<API_RESPONSE<[]>>(`${this.API_BASE_URL}${API_URLS.DSV_UI_GET_ALL_PRODUCTS}`);
  }

  

}
