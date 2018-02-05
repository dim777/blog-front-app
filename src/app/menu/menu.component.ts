import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {MenuServices} from './menu.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ MenuServices ]
})
export class MenuComponent implements OnInit {
  public loading = false;

  categories: Category[] = [];
  constructor(private menuServices: MenuServices ) { }

  ngOnInit() {
    this.loading = true;
    this.menuServices.getCategories()
      .subscribe(data => {
        this.categories = data;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }

}
