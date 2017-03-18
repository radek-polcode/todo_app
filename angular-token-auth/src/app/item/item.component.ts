import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  id: number;
  name: string;
  description: string;

  title = 'Items';
  items;

  constructor(private http: Http) {
    http.get('http://localhost:3000/items.json')
      .subscribe(res => this.items = res.json());
  }

  ngOnInit() {
  }

}
