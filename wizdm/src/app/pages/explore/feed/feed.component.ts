import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, filter, take, map, expand} from 'rxjs/operators';

import { query, stream, onSnapshot, where, orderBy, limit, endBefore, docs, snap } from '@wizdm/connect/database/collection/operators';
import { DatabaseGroup, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseService } from '@wizdm/connect/database';
import { PostData} from './feed-types';
import { UserProfile, UserData } from 'app/utils/user';



@Component({
  selector: "wm-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent extends DatabaseGroup<PostData> {

  public feed$: Observable<QueryDocumentSnapshot<PostData>[]>;

  public loading: boolean = true;

 

  constructor(db: DatabaseService, private user: UserProfile<UserData>) {
    super(db, "feed");

    this.feed$ = this.pipe( 

      // Read up to 50 posts statically
      where('tags', 'array-contains', 'public'), orderBy('created', 'desc'), limit(50), snap(),
      
      tap(feed => console.log(feed)),

      // Expands to pre-pend the latest comers
      expand( oldOnes => this.pipe(

        // Streams the new posts created after the ones we already listed 
        where('tags', 'array-contains', 'public'), orderBy('created', 'desc'), endBefore(oldOnes[0]), stream(this.db.zone),
        tap(feed => console.log(feed)),

        // Filters out emty read (firestore always starts with an emty emission) to than take the first contentful emission
        filter( newOnes => newOnes.length > 0 ), take(1), 
        tap(feed => console.log(feed)),

        
        // Appends the old posts to the new comers and recur
        map( newOnes => newOnes.concat(oldOnes) )
      ))
    );

    console.log(this.feed$);
  }

 
}
