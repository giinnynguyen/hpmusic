import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SongHighlightItemComponent } from './song-highlight-item/song-highlight-item.component';
import {BannerComponent} from "../../layout/banner/banner.component"
import {NgImageSliderModule} from "ng-image-slider";


@NgModule({
  declarations: [
    HomepageComponent,
    SongHighlightItemComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgImageSliderModule
  ]
})
export class HomepageModule { }
