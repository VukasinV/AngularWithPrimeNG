import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MeetupTableComponent } from './meetup-table/meetup-table.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    ButtonModule
  ],
  declarations: [MeetupTableComponent, HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
