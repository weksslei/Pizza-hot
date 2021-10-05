import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
@Injectable({providedIn: "root"})

export class RespositoryService {

  constructor(private http: HttpClient) {}

  private createCompleteRoute(envAdress:string, route:string) {
    return `${envAdress}/${route}`
  }

  private gerateHeaders() {
    return {
      headers: new HttpHeaders({"Content-type": "application/json"})
    }
  }

}
