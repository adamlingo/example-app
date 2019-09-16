import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
	selector: 'post-show',
	templateUrl: 'post-show.component.html',
	styleUrls: ['post.component.scss']
})

export class PostShowComponent implements OnInit {

	id: number;
	routeId: any;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private postService: PostService
	) {}

	// import using Input from post-list.component.ts
	@Input() post: Post;

	ngOnInit() {
		this.routeId = this.route.params.subscribe(
			params => {
				// fetch route param as String
				this.id = +params['id'];
			}
		)
		// create get-post and save it in variable postRequest
		let postRequest = this.route.params
				.flatMap((params: Params) =>
					this.postService.getPost(+params['id']));
		postRequest.subscribe(response => this.post = response.json());
	}
}