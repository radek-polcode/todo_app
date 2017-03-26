import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemService {

  private url: string = "http://localhost:3000/v1/items";

  constructor(private http: Http) { }

  getItems(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getItem(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  addItem(item){
    return this.http.post(this.url, {'item': item})
      .map(res => res.json());
  }

  updateItem(item){
    return this.http.put(this.url + '/' + item.id, {'item': item})
      .map(res => res.json());
  }

  deleteItem(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
