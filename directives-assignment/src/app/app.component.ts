import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsPush = false;
  detailsLog = [];
  count = 0;

  onDisplayDetails(){
    this.detailsPush = !this.detailsPush;
    this.detailsLog.push(this.detailsLog.length + 1)
  }
}
