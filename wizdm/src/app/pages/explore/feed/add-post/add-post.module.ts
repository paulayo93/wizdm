import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from '@wizdm/elements/avatar';
import { IconModule } from '@wizdm/elements/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModule } from '@wizdm/elements/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



import {MatListModule} from '@angular/material/list'; 

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        AvatarModule,
        IconModule,
        MatListModule,
        DialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    exports: [AddPostComponent],
    declarations: [AddPostComponent],
})
export class AddPostModule { }
