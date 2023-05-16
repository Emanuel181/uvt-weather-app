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

  favorites: Array<any> = [
    {
      title: 'Arad',
      img: 'https://i0.wp.com/aradevents.ro/wp-content/uploads/2022/12/arad-mg-9347-1.jpg?fit=1980%2C1320&ssl=1',
    },
    {
      title: 'Brasov',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YrzPegtAwQyfTWZcNy8TNgHaE8%26pid%3DApi&f=1&ipt=c5839f49b1bab8642d6e84f216aa87a52be86d40912f0f30ea3d69a44c163d2b&ipo=images',
    },
    {
      title: 'Oradea',
      img: 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI4JTJGMTMwNjQ0Nl8xMzA2/NDQ2X29yYWRlYS5qcGcmdz03ODAmaD00/NDAmaGFzaD1hOWEwYmUzOTAwNzQxODEwOWFlODc2YWM2NTU2ZmUwYg==.thumb.jpg',
    },
    {
      title: 'Sibiu',
      img: 'https://holaromania.com/wp-content/uploads/2020/07/sibiu-romania-atardecer-800x522.jpg',
    },
    {
      title: 'Cluj',
      img: 'https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg',
    },
  ];

  constructor(private weatherAPIService: WeatherAPIService) {
    this.weatherAPIService.loadData('Timisoara').subscribe((response: any) => {
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
}
