import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {tap, filter, take, map, expand} from 'rxjs/operators';

import { query, stream, onSnapshot, where, orderBy, limit, endBefore, docs, snap } from '@wizdm/connect/database/collection/operators';
import { DatabaseGroup, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseService } from '@wizdm/connect/database';
import { FeedData, PostData} from './feed-types';
import { UserProfile, UserData } from 'app/utils/user-profile';



@Component({
  selector: "wm-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent extends DatabaseGroup<FeedData> {

  readonly feeds$: Observable<QueryDocumentSnapshot<FeedData>[]>;
 

  public loading: boolean = true;

  public get me(): string {
    return this.user.uid;
  }

  constructor(db: DatabaseService, private user: UserProfile<UserData>) {
    super(db, "feed");

  }

 
}
