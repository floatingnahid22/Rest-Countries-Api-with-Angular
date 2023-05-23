import { Component, OnInit } from '@angular/core';
import { CountriesInfoService } from '../services/countries-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any = [];

  constructor(private countriesInfoService: CountriesInfoService) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken() {
    this.countriesInfoService.getAccessToken().subscribe(response => {
      console.log(response);
      const authToken = response.auth_token;
      console.log(authToken);
      this.makeApiCall(authToken);
    });
  }

  makeApiCall(authToken: string) {
    this.countriesInfoService.makeApiCall(authToken).subscribe(response => {
      console.log(response);
      this.countries = response; // Store the country information in the 'countries' variable
    }, error => {
      console.error(error);
      // Handle any errors here
    });
  }
}
