import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Post, PostByUser } from './post.interface';
import { HttpClient } from '@angular/common/http';
import { filter, map, reduce, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  get allTasks(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  get groupTasksByUser(): Observable<PostByUser> {
    return this.allTasks.pipe(
      switchMap((task) => from(task)),
      reduce((acc: PostByUser, cur: Post) => {
        const { userId } = cur;
        let updatedPosts: Post[];

        if (acc.hasOwnProperty(userId)) {
          updatedPosts = [...acc[userId], cur];
        } else {
          updatedPosts = [cur];
        }

        acc[userId] = updatedPosts;

        return acc;
      }, {})
    );
  }

  getPostsByUser(userId: string) {
    return this.http.get<Post[]>(`${this.url}?userId=${userId}`);
  }
}
