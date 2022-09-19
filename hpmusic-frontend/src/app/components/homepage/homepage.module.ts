import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SongHighlightItemComponent } from './song-highlight-item/song-highlight-item.component';


@NgModule({
  declarations: [
    HomepageComponent,
    SongHighlightItemComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
