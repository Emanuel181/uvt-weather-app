import { Component, Input } from '@angular/core';

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

  isFavorite: boolean = false;

  onFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
