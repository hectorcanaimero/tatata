import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [BlogComponent, PostComponent],
  exports: [BlogComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ]
})
export class BlogModule { }
