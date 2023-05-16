import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WeatherAPIService } from '../dashboard/weather-api.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss'],
})
export class CustomSearchComponent {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  inputText = new FormControl('');

  constructor(private weatherAPIService: WeatherAPIService) {}

  ngOnInit() {}

  onEmit(): void {
    console.log(this.inputText.getRawValue());
    this.searchEvent.emit(this.inputText.getRawValue()!);
  }
}
