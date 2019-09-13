import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
	{ path: '', redirectTo: '/posts', pathMatch: 'full' },
	{ path: 'posts', component: PostListComponent },
	{ path: 'home',  component: HomepageComponent },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }