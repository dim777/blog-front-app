import {Component, OnInit} from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ArticleService ]
})
export class AppComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {

    this.articleService.getArticles().subscribe(data => this.articles = data);
  }
}
