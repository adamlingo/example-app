import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes for project listed here
import { PostListComponent } from './post/post-list.component';
import { PostShowComponent } from './post/post-show.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',  component: HomepageComponent },
	{ path: 'posts', component: PostListComponent },
	{ path: 'posts/:id', component: PostShowComponent },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }