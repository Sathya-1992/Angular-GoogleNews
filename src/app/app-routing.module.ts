import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowcomponentComponent } from './followcomponent/followcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NewsShowcaseComponent } from './news-showcase/news-showcase.component';

const routes: Routes = [
  {path:"",component:HomecomponentComponent},
  {path:"Home",component:HomecomponentComponent},
  {path:"Follow",component:FollowcomponentComponent},
  {path:"Home/:topicName",component:HomecomponentComponent},
  {path:"Showcase",component:NewsShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
