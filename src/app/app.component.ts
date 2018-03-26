import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  body: string;

  photos$ = this.backendService.getPhotos().pipe(
    map(data => {
      return data.slice(0, 10);
    })
  );
  posts$;
  postComments: { [key: number]: Observable<any> };

  constructor(private backendService: BackendService) {
    this.postComments = {};
    this.refreshPosts();
  }

  refreshPosts() {
    this.posts$ = this.backendService.getPosts().pipe(tap(console.log));
  }

  getCommments(id) {
    this.postComments[id] = this.backendService.getComments(id).pipe(tap(console.log));
  }

  newPost() {
    this.backendService
      .newPost(this.title, this.body)
      .pipe(
        tap(() => {
          this.refreshPosts();
        })
      )
      .subscribe();
  }
}
