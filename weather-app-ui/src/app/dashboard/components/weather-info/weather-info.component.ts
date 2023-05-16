import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent {
  @Input() title: string = 'Wind';
  @Input() value: string = '22';
  @Input() iconName: string = 'home';
  @Input() iconColor: string = 'red';
}
