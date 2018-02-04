import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.services';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ ArticlesService ]
})
export class ArticlesComponent implements OnInit {

  public loading = false;

  articles: Article[] = [];

  featuredArticles: Article[] = [];

  constructor(private articleService: ArticlesService) {}

  ngOnInit() {
    this.loading = true;
    this.articleService.getArticles()
      .subscribe(data => {
        this.articles = data;
        this.loading = false;
      }, err => {
        this.loading = false;
      });

    this.loading = true;
    this.articleService.getFeaturedArticles()
      .subscribe(data => {
        this.featuredArticles = data;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }

}
