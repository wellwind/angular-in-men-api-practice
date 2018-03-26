import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api';
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

    const photos = [
      { id: 1, thumbnailUrl: 'http://placehold.it/150/92c952' },
      { id: 2, thumbnailUrl: 'http://placehold.it/150/771796' },
      { id: 2, thumbnailUrl: 'http://placehold.it/150/24f355' }
    ];
    return { posts, photos };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities) {
    const newUrl = url.endsWith('foo/bar/photos') ? 'api/photos' : url;
    const parsed = utils.parseRequestUrl(newUrl);
    console.log(newUrl, parsed);
    return parsed;
  }

  constructor() {}
}
