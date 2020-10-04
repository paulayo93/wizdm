import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { DialogComponent } from '@wizdm/elements/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PostData } from '../feed-types'
import { DatabaseDocument } from '@wizdm/connect/database/document';
import { DatabaseService, Timestamp } from '@wizdm/connect/database';
import { UserProfile, UserData } from 'app/utils/user';
import { MediaObserver } from '@angular/flex-layout';
import {AddPostService} from './add-post.service'
import {MatExpansionPanel} from '@angular/material/expansion';

@Component({
    selector: 'wm-addpost',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss'],
    host: { 'class': 'wm-addpost' },
    encapsulation: ViewEncapsulation.None,
})

export class AddPostComponent implements  OnInit{

    public post: DatabaseDocument<PostData>;

    private postForm: FormGroup;

    @ViewChild(MatExpansionPanel) private emojiKeysPanel: MatExpansionPanel;

    /** The current user's id */
    get me(): string { return this.user.uid; }

    constructor(
        db: DatabaseService, 
        private user: UserProfile,
        private addPostService: AddPostService,
        private media: MediaObserver) {

    }

    public logValue(data) {
        console.log(data);
    }

    /**
     * savepost
     */
    public savePost(data: PostData) {

        this.addPostService.savePost(data);
    }

    ngOnInit() {

        this.postForm = new FormGroup({
            text: new FormControl('')
        })

        console.log(this.postForm)
    }

    public toggleEmojiKeys() {

       return this.emojiKeysPanel.toggle(),  false;
    }

}
