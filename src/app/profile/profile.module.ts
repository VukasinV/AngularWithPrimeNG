import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile.routing-module';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ReviewListComponent } from './review-list/review-list.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// image cropper
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    MessagesModule,
    DropdownModule,
    ButtonModule,
    FileUploadModule,
    CardModule,
    GrowlModule,
    ImageCropperModule,
    ProgressSpinnerModule
  ],
  declarations: [ProfileComponent,
    ProfileDetailsComponent,
    ReviewListComponent
  ]
})
export class ProfileModule { }
