import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(private http:Http) { }

  GetStudentData():Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/0dd86b55-1c92-11e8-8434-99715210f174").map(obs=>obs.json());
  }


}
