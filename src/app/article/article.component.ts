import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ArticleService} from './article.services';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public loading = false;
  article: Article;
  private alias: string;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private articleService: ArticleService) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.alias = params['alias'];
    });
  }

  ngOnInit() {
    this.loading = true;
    this.articleService.getArticle(this.alias)
      .subscribe(data => {
        this.article = data;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }
}
