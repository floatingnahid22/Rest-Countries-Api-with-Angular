import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries-api';
  selectedRegion: string | undefined;

  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }
}
