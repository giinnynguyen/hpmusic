import {Component, OnInit} from '@angular/core';
import {NEW_SONGS, RANKS, TOP_SINGER} from "../../dummyData/homepage";

@Component({
  selector: 'hps-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  musicCategory = [
    'Nổi bật', 'Nhạc trẻ', 'Pop', 'Dân ca', 'Nước ngoài', 'Rap/Hiphop', 'Thiếu nhi'
  ]
  currentCategoryIdx = 0;
  musicRanks = RANKS;
  newSongs = NEW_SONGS;
  topSingers = TOP_SINGER;
  currentUsserIdx = -1;
  constructor() {
  }

  ngOnInit(): void {
  }

}
