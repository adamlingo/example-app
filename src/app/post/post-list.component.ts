import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostListComponent implements OnInit {
	posts: Post[];

  constructor(private postService: PostService,
              private router: Router
  ) { }

  ngOnInit() {
    // removed Observable code that ran index on timer
  	this.getPosts();
  }
  // calls getPosts() from post.service.ts
  getPosts()  {
  	this.postService.getPosts()
  		.subscribe(posts => this.posts = posts);
  }
  // navigate to Post page
  goToShow(post: Post): void {
    let postLink = ['/posts', post.id];
    this.router.navigate(postLink);
  }

}
