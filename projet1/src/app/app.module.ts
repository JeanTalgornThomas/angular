import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { AppareilListViewComponent } from './components/appareil-list-view/appareil-list-view.component';
import { AppareilsService } from './services/appareils.service';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'appareil', component: AppareilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    BlogComponent,
    AppareilViewComponent,
    AppareilComponent,
    AppareilListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
