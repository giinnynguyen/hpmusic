import { Component, OnInit } from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {RegisterComponent} from "../../components/register/register.component";

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  showRegisterDialog() {
    this.dialogService.open(RegisterComponent, {
      header: 'SMS login registration',
      width: '520px',
      height: '420px',
      styleClass: 'register-dialog',
      contentStyle: {
        "font-size": "14px",
        "color": "#5f5f5f",
      }
    });
  }

}
