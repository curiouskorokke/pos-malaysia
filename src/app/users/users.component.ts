import { Component, Inject, OnInit } from '@angular/core';
import { PostService } from '../http/post.service';
import { PostByUser } from '../http/post.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userPosts: PostByUser = {};
  constructor(@Inject(PostService) private post: PostService) {}

  ngOnInit(): void {
    this.post.groupTasksByUser.subscribe((userPosts) => {
      this.userPosts = userPosts;
    });
  }

  get userPostsByKey() {
    return Object.keys(this.userPosts);
  }

  trackUserPostFn(_index: number, value: PostByUser) {
    return value || undefined;
  }
}
