import { Localization } from './../models/localization.model';
import { Offers } from './../models/offers.model';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({providedIn: "root"})

export class RepositoryService {
  public envAdress:string  = environment.envAdress;
  constructor(private http: HttpClient) {}

  public getJson():Observable<Offers[] & Localization[]> {
    return this.http.get<Offers[] & Localization[]>(this.envAdress);
  }

  private createCompleteRoute(envAdress:string, route:string) {
    return `${envAdress}/${route}`
  }

  private gerateHeaders() {
    return {
      headers: new HttpHeaders({"Content-type": "application/json"})
    }
  }

}
