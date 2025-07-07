import { CommonModule, NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [CommonModule, RouterModule],
  exports: [UsersComponent],
})
export class UsersModule {}
