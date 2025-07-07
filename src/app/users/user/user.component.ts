import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/app/http/post.interface';

@Component({
  selector: 'li[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {
  @Input() posts: Post[];

  constructor() {}

  ngOnInit(): void {}
}
