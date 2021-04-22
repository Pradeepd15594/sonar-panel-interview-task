import { Component, OnInit } from '@angular/core';
import * as data from "../../../../assets/data/Categories.json";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jsonStorage: any = (data as any).default;

  constructor() {
    console.log(this.jsonStorage.dashboard, 'data of cat');
  }

  ngOnInit(): void {
  }

}
