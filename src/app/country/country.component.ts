import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: any = [];
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    const apiUrl = 'https://restcountries.com/v2/all';
    this.loading = true;


    axios
      .get(apiUrl)
      .then((response) => {
        this.countries = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        this.loading = false;
      });
  }

  getCurrencyNames(country: any): string {
    return country.currencies.map((currency: any) => currency.name).join(', ');
  }
  
  getLanguageNames(country: any): string {
    return country.languages.map((language: any) => language.name).join(', ');
  }
  
}

