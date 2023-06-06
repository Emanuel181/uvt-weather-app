import { WeatherAPIService } from './../../weather-api.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent {
  @Input() title: string = 'Timisoara';
  @Input() region: string = 'Timis';
  @Input() country: string = 'Romania';
  @Input() timezone: string = 'Europe/Bucharest';
  @Input() localtime: string = '2023-05-15 15:11';
  @Input() iconName: string = 'favorite';
  @Input() iconColor: string = 'red';
  @Input() isFavorite: boolean = false;
  @Output() onFavorite: EventEmitter<any> = new EventEmitter();

  constructor(private weatherAPIService: WeatherAPIService) {}

  onFavoriteClicked(): void {
    this.weatherAPIService.onFavorite(this.title);
    console.log(this.title);

    this.onFavorite.emit();
  }
}
