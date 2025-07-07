import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'users/:userId',
        component: PostsComponent,
      },
    ]),
    UsersModule,
    PostsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
