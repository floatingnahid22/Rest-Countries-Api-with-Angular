import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: any = [];

  constructor() {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    const apiUrl = 'https://restcountries.com/v2/all';

    axios
      .get(apiUrl)
      .then((response) => {
        this.countries = response.data;
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }

  getCurrencyNames(country: any): string {
    return country.currencies.map((currency: any) => currency.name).join(', ');
  }
  
  getLanguageNames(country: any): string {
    return country.languages.map((language: any) => language.name).join(', ');
  }
  
}
