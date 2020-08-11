import { Injectable } from '@angular/core';
import { DatabaseGroup, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseService } from '@wizdm/connect/database';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Feed {
  username?: string;
  moreVert?: string;
  userImage?: string;
  avatar?: string;
  postMsg?: string;
  postImage? : string;
  color?: string;
  created?: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(){}

}