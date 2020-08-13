import { DatabaseGroup, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseService } from '@wizdm/connect/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {FeedData} from './feed-types';



@Component({
  selector: 'wm-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent extends DatabaseGroup<FeedData> {

  readonly feed$: Observable<QueryDocumentSnapshot<FeedData>[]>;

  constructor(db: DatabaseService) { 
    
    super(db, 'feed');

    this.feed$ = this.query( qf => qf.where('tags', 'array-contains', 'public').orderBy('created', 'desc') );
  }

  // card: Feed = {
  //   username: "Wizdm.io",
  //   moreVert: "Compassionate development",
  //   avatar: "https://octodex.github.com/images/saritocat.png",
  //   userImage:
  //     "https://images.unsplash.com/photo-1421526053088-51b69c8a8d59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f00bcff27bf4fd8062358af0c28c653&auto=format&fit=crop&w=1946&q=80",
  //   color: "blue",
  //   postImage: "https://images.unsplash.com/photo-1421526053088-51b69c8a8d59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7f00bcff27bf4fd8062358af0c28c653&auto=format&fit=crop&w=1946&q=80",
  //   postMsg:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet risus nullam eget felis."
  // };

}
