import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'hp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  imageObject = [{
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/2.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/2.jpg',
    title: ''
  }, {
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/1.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/1.jpg'
  }, {
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/3.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/3.jpg',
    title: 'Năm tháng vội vã'
  }, {
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/5.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/5.jpg',
    title: ''
  }, {
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/truongkiet.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/truongkiet.jpg'
  }, {
    image: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/4.jpg',
    thumbImage: 'http://hpmusic.azurewebsites.net/Assets/client/data0/images/4.jpg',
    title: ''
  }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
