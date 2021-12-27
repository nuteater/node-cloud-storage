import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeCloudStorageService {

  constructor() { }

  execChange: Subject<any> = new Subject<any>();

  isSub: boolean = false;
  currentSubType: string = "free";
  subTypes: string[] = ["free", "oneMonth", "threeMont", "year"];

  getAvailableSbuTypes(): string[]{
    return this.subTypes;
  }

  getCurrentType() : string{
    return this.currentSubType;
  }

  changeCurrentType(type: string){
    this.currentSubType = type;
  }

}
