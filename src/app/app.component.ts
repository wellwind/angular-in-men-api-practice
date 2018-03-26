import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  body: string;

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
