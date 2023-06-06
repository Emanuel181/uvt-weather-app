import { WeatherAPIService } from './../dashboard/weather-api.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-town-preview',
  templateUrl: './town-preview.component.html',
  styleUrls: ['./town-preview.component.scss'],
})
export class TownPreviewComponent {
  @Output() onFavorite: EventEmitter<any> = new EventEmitter();
  @Input() title: string = 'Wind';
  @Input() img: string = '22';
  @Input() iconName: string = 'home';
  @Input() iconColor: string = 'red';
  @Input() isFavorite: boolean = false;

  constructor(private weatherAPIService: WeatherAPIService) {}

  onFavoriteClicked(title: string) {
    this.weatherAPIService.onFavorite(this.title);
    this.onFavorite.emit(this.title);
  }
}
