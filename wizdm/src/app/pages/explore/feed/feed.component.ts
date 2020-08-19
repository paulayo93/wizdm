import { Component } from "@angular/core";
import { FeedData, FeedPost } from "./feed-types";
import {
  QueryDocumentSnapshot,
  QueryFn,
  DatabaseCollection,
} from "@wizdm/connect/database/collection";
import { DatabaseGroup } from "@wizdm/connect/database/collection/group";
import { DatabaseService } from "@wizdm/connect/database";
import { Observable, BehaviorSubject } from "rxjs";
import { get, data } from "@wizdm/connect/database/collection/operators";
import {
  map,
  startWith,
  switchMap,
  shareReplay,
  distinctUntilChanged,
} from "rxjs/operators";
import { UserProfile, UserData } from "app/utils/user-profile";
import { EmojiRegex } from "@wizdm/emoji/utils";

@Component({
  selector: "wm-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent extends DatabaseGroup<FeedData> {
  
  readonly feeds$: Observable<QueryDocumentSnapshot<FeedData>[]>;
  private feedList: Observable<FeedPost[]>
  public feedQry;

  public loading: boolean = true;

  public get me(): string {
    return this.user.uid;
  }

  constructor(db: DatabaseService, private user: UserProfile<UserData>) {
    super(db, "feed");

    console.log("Get user post feed...");

    // query the feed subcollection using the Query and QueryDocumentSnapshot endpoint
    this.feeds$ = this.query((qf?: FeedData) => qf.where("tags", "array-contains", "public").orderBy("created", "desc")/*.get({'post': 'source'})*/)

    const feedDisplay$ = this.feeds$.pipe(
      switchMap(data => this.feedQry = data)    
      )

    console.log(this.feedQry);
  }

  // Streams new data as an observable

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
