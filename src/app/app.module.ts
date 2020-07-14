import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

// +1
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    // +2
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent},
      // 添加重定向
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      // 添加４０４页面，为任何未指定的路由显示该页面
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
