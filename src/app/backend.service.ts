import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get<any>('api/posts');
  }

  getComments(id): Observable<any> {
    return this.httpClient.get<any>(`api/comments/?postId=${id}`);
  }
}
