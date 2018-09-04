import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MeetupTableComponent } from './meetup-table/meetup-table.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DataViewModule
  ],
  declarations: [MeetupTableComponent, HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
