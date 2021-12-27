import { Component, OnInit } from '@angular/core';
import {NodeCloudStorageService} from "../node-cloud-storage.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  progress : number = 50;
  subTypes: string[];
  currentType: string;

  constructor(private nodeCloudStorageService: NodeCloudStorageService) { }


  ngOnInit() {
    this.subTypes = this.nodeCloudStorageService.subTypes;
    this.currentType = this.nodeCloudStorageService.getCurrentType();
  }

}
