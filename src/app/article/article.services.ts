import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(alias: string): Observable<Article> {
    return this.http.get('http://localhost:9600/article?alias=' + alias)
      .map(data => {
        return data as Article;
    });
  }
}
