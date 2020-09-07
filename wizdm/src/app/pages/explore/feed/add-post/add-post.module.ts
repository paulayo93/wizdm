import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from '@wizdm/elements/avatar';
import { IconModule } from '@wizdm/elements/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatListModule} from '@angular/material/list'; 

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        AvatarModule,
        IconModule,
        MatListModule
    ],
    exports: [AddPostComponent],
    declarations: [AddPostComponent],
})
export class AddPostModule { }
