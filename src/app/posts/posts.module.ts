import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostModule],
  exports: [PostsComponent],
})
export class PostsModule {}
