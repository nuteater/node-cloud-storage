import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private spinner : NgxSpinnerService) {
    this.spinner.show();

    setTimeout(() => this.spinner.hide(), 10000);
  }

  title = 'frontend';
}
