import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  song = {
    songName: 'Xem Như Em Chẳng May',
    songId: '',
    userAvt: '',
    username: 'ginny'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
