import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CribsService {
  public newCribSubject = new Subject<any>();
  constructor( private http : Http ) { }

  getAllData() {
    return this.http.get('/assets/data/data.json').map(res => res.json())
  }

  addProperty(data){
    data.images = 'default.png';
    this.newCribSubject.next(data);
  }

}
