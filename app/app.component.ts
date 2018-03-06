import { Component } from '@angular/core';
import { Page } from 'ui/page';

@Component({
  selector: 'td-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }
}
