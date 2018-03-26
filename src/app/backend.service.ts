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
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  newPost(title: string, body: string) {
    return this.httpClient.post<any>('api/posts', { title, body });
  }

  getPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>('foo/bar/photos');
  }
}
