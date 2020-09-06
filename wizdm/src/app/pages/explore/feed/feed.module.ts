import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IconModule } from '@wizdm/elements/icon';
import { ButtonChangerModule } from '@wizdm/elements/button';
import { GtagModule } from '@wizdm/gtag';
import { ActionbarModule } from 'app/navigator/actionbar';
import { ContentRouterModule, RoutesWithContent } from '@wizdm/content';
import { FeedComponent } from './feed.component';
import { AvatarModule } from '@wizdm/elements/avatar';
import { ReadmeModule } from '@wizdm/readme';
import { PostModule } from './post/post.module';
import {AddPostModule} from './add-post/add-post.module'

const routes: RoutesWithContent = [
  {
    path: '',
    content: 'explore/feed',
    component: FeedComponent
  }
];

@NgModule({
  declarations: [ FeedComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    IconModule,
    ButtonChangerModule,
    GtagModule,
    ActionbarModule,
    AvatarModule,
    ReadmeModule,
    AddPostModule,
    PostModule,
    ContentRouterModule.forChild(routes)
  ]
})
export class FeedModule { }
