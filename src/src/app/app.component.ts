import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  feature: string = "recipe";

  onSelectFeature(data: string) {
    this.feature = data;
  }
}
