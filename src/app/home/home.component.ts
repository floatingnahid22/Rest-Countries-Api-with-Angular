import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchTerm: string = '';

  searchCountries() {
    if (this.searchTerm.trim() !== '') {
      console.log('Search term:', this.searchTerm);
    } else {
      console.log('Empty search term');
    }
  }
}
