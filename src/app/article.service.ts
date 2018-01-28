import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:9600/articles').map(data => {
      const articles = data[''];
      return articles.map(function(article: any) {
        return {title: article.title, alias: article.alias};
      });
    });
  }
}
