import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {HIGHLIGHT_MUSIC} from "../../dummyData/homepage";

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
  constructor() {
  }

  ngOnInit(): void {
  }

}
