import { Component } from '@angular/core';
import { WeatherAPIService } from './weather-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  location: any = {
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1684150254,
      localtime: '2023-05-15 12:30',
    },
    current: {
      last_updated_epoch: 1684149300,
      last_updated: '2023-05-15 12:15',
      temp_c: 13.0,
      temp_f: 55.4,
      is_day: 1,
      condition: {
        text: 'Partly cloudy',
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        code: 1003,
      },
      wind_mph: 13.6,
      wind_kph: 22.0,
      wind_degree: 350,
      wind_dir: 'N',
      pressure_mb: 1020.0,
      pressure_in: 30.12,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 47,
      cloud: 50,
      feelslike_c: 11.1,
      feelslike_f: 52.0,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 3.0,
      gust_mph: 15.0,
      gust_kph: 24.1,
    },
  };

  favorites: Array<any> = [];

  constructor(private weatherAPIService: WeatherAPIService) {
    this.favorites = weatherAPIService.favorites;

    this.weatherAPIService.loadData('Timisoara').subscribe((response: any) => {
      console.log(response);

      this.location = response;
    });
  }
  onSearch(data: string) {
    console.log('test ');
    console.log(data);

    this.weatherAPIService.loadData(data).subscribe((response: any) => {
      this.location = response;
    });
  }

  isFavorite(title: string) {
    return this.weatherAPIService.isFavorite(title);
  }

  onRefresh() {
    this.favorites = this.weatherAPIService.favorites;
  }
}
