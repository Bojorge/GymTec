import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
 
  private APIurl="https://localhost:5001/api/activities";

  constructor(private http: HttpClient) { }

  actualUser(): Observable<Cliente> {
    return this.http.get<Cliente>(this.APIurl);
  }
}
