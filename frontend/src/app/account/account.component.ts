import {Component, Injector, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  constructor( private spinner : NgxSpinnerService ) {
  }


  ngOnInit(): void {
    // this.spinner.show();
    // setTimeout(() => this.spinner.hide(), 5000);
  }

}
