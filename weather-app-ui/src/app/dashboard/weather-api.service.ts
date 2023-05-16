import { Injectable } from '@angular/core';
import { WeatherItem } from '../models/stock-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  private colors: Array<string> = [
    '#875ef9',
    '#edbae5',
    '#2acaea',
    '#ff80ed',
    '#1dd3d0',
    '#1ecdc9',
    '#2dd4dc',
    '#1c1c1c',
    '#666666',
    '#20daa5',
    '#daa520',
    '#391285',
    '#ec9969',
    '#6154c8',
    '#f6546a',
    '#2c175c',
    '#6d1464',
    '#590042',
    '#ff95be',
    '#245923',
    '#a52a2a',
    '#94ff2b',
    '#b0e0e6',
    '#c6e2ff',
    '#f0f8ff',
    '#00a86b',
    '#e19cf6',
    '#48066f',
    '#b79e79',
    '#5ddeb1',
    '#8889ec',
    '#9fe2bf',
    '#574327',
    '#0d2b4e',
    '#95abbb',
    '#590042',
    '#f1c232',
    '#7d95be',
    '#9bb7d4',
    '#dfbd46',
    '#6eacd9',
    '#13131',
  ];
  constructor(private httpClient: HttpClient) {}

  public getColor(): string {
    let index = Math.floor(Math.random() * (this.colors.length - 1));

    return this.colors[index];
  }

  public loadData(location: string) {
    return this.httpClient.get(
      `http://api.weatherapi.com/v1/current.json?key=bc3ecfaa933e4734bf491123232804&q=${location}&aqi=no`
    );
  }
}
