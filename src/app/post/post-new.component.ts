import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
	selector: 'post-new',
	templateUrl: 'post-new.component.html',
	styleUrls: ['post.component.scss']
})

export class PostNewComponent {
	post = new Post;
	submitted: boolean = false; //check if form is submitted

	constructor(private postService: PostService) {}
	// create post and return new post or error
	createPost(post: Post) {
		this.submitted = true;
		this.postService.createPost(post)
			.subscribe(data => { return true},
				error => {
					console.log("Error creating post");
					return Observable.throw(error);
				});
	}
}