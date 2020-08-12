import { DatabaseDocument, DocumentData } from '@wizdm/connect/database/document';

export interface FeedData extends DocumentData {
  username?: string;
  moreVert?: string;
  userImage?: string;
  avatar?: string;
  postMsg?: string;
  postImage? : string;
  color?: string;
}
