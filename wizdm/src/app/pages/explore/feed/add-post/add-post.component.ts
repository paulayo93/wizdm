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

@Component({
    selector: 'wm-addpost',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.scss'],
    host: { 'class': 'wm-addpost' },
    encapsulation: ViewEncapsulation.None,
})

export class AddPostComponent extends DatabaseDocument<UserData>{

    public post: DatabaseCollection<PostData>;

    /** The current user's id */
    get me(): string { return this.user.uid; }

    readonly form: FormGroup;
    private title: FormControl
    private text: FormControl
    private author: FormControl

    public pstVal: string;
    //   tags?   : string[];

    constructor(db: DatabaseService, private user: UserProfile) {
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
    public savepost(data: QueryDocumentSnapshot<PostData>) {
        /**
get the root collection ref

get the child document from the collection instance
const document = this.document(user.uid);
 */

        //  var data = this.form.value.text;


        var collectionRef = this.db.collection('users').document(this.user.id).exists()
            .then(exists => {
                console.log(exists);
                if (exists) {
                    this.db.collection('users').document(this.user.uid).collection('feeds').uniqueId;
                }
            })

        if (this.me) {
            console.log(this.user.data);
            this.logValue(data);

            this.db.collection('users').document(this.user.uid).exists()
            console.log(this.db.collection('users').document(this.user.uid).exists().then(
                exist => { console.log(exist); }
            ))

        }

    }

}