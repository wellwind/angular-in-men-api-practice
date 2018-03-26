import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class InMemDbService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const posts = [
      { id: 1, title: 'Test title1' },
      { id: 2, title: 'Test title2' },
      { id: 3, title: 'Test title3' },
      { id: 4, title: 'Test title4' }
    ];
    return { posts };
  }

  constructor() {}
}
