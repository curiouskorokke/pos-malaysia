import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../http/post.service';
import { Post } from '../http/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private actRoute: ActivatedRoute,
    @Inject(PostService) private post: PostService
  ) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((param) => {
      const userId = param.get('userId');

      this.post.getPostsByUser(userId).subscribe((posts) => {
        this.posts = posts;
      });
    });
  }

  trackPostsFn(_index: number, val: Post) {
    return val.id;
  }
}
