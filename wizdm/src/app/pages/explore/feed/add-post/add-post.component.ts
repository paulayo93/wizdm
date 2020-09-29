import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { DialogComponent } from '@wizdm/elements/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PostData } from '../feed-types'
import { DatabaseCollection, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseDocument } from '@wizdm/connect/database/document';
import { DatabaseService, Timestamp } from '@wizdm/connect/database';
import { UserProfile, UserData } from 'app/utils/user';
import { shareReplay, take } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { TypeinAdapter } from 'app/utils/textarea';

@Component({
    selector: 'wm-addpost',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss'],
    host: { 'class': 'wm-addpost' },
    encapsulation: ViewEncapsulation.None,
})

export class AddPostComponent extends DatabaseDocument<UserData>{

    public post: DatabaseDocument<PostData>;

    /** The current user's id */
    get me(): string { return this.user.uid; }

    readonly form: FormGroup;
    private title: FormControl
    private text: FormControl
    private author: FormControl

    public pstVal: string;
    //   tags?   : string[];

    constructor(
        db: DatabaseService, 
        private user: UserProfile,
        private media: MediaObserver) {
        super(db)

        this.form = new FormGroup({
            title: new FormControl(null),
            text: new FormControl(null),
            author: new FormControl(null)
        });
    }

    public logValue(data) {
        // console.log(this.text)
        // this.pstVal = this.text.value;
        console.log(data);

    }





    /**
     * savepost
     * 
     */

    public savepost(data: PostData) {
        // let data: PostData = {};

        data.title = 'This si viw iowi'
        data.text = data.text;
        data.author = 'Paul Ayo';
        data.channel = 'Mobile Device'
        data.tags = ['public', 'groups']

        const userCol = this.db.collection('users')
        const userColId = userCol.document(this.user.uid);
        const feedEndpoint = userColId.collection('feed');
        feedEndpoint.add({...data}).then(value => console.log(value.get()))

    }

}
