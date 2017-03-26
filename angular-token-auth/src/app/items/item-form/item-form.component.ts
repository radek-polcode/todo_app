import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.sass']
})
export class ItemFormComponent implements OnInit {
  title: string;
  item: Item = new Item();

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.title = id ? 'Edit item' : 'Create Item';

      if(!id)
        return;

      this.itemService.getItem(id)
        .subscribe(
          item => this.item = item,
          response => {});

    });
  }

  save() {
    var result;

    if (this.item.id) {
      result = this.itemService.updateItem(this.item);
    } else {
      result = this.itemService.addItem(this.item);
    }

    result.subscribe(data => this.router.navigate(['/items']));
  }

}
