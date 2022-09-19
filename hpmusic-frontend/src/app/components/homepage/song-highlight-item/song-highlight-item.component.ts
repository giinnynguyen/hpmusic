import {Component, OnInit} from '@angular/core';
import {HIGHLIGHT_MUSIC} from "../../../dummyData/homepage";

@Component({
  selector: 'hp-song-highlight-item',
  templateUrl: './song-highlight-item.component.html',
  styleUrls: ['./song-highlight-item.component.scss']
})
export class SongHighlightItemComponent implements OnInit {
  highlightMusic = HIGHLIGHT_MUSIC;
  currentIdx = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

}
