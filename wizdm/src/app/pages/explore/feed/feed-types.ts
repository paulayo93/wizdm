import { DatabaseDocument, DocumentData } from '@wizdm/connect/database/document';

export interface FeedData extends DocumentData {
    feedData?: FeedPost;
}

export interface FeedPost{
  [post:string]: {
    title?  : string;
    text?   : string; 
    photo?  : string;
    author? : string; 
    tags?   : string[];
  };
}