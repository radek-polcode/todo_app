import { Component, OnInit } from '@angular/core';
import { ItemService } from './shared/item.service';
import { Item } from './shared/item';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  private items: Item[] = [];

  constructor(
    private itemService: ItemService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(data => this.items = data);
    console.log(this.itemService.getItems());
  }

  deleteItem(items) {
    if (confirm("Are you sure" + items.name + "?")) {
      var index = this.items.indexOf(items);
      this.items.splice(index, 1);

      this.itemService.deleteItem(items.id)
        .subscribe(data => this.router.navigate(['/items']));
    }
  }

}
