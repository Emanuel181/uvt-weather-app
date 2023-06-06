import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  public favorites: Array<any> = [
    {
      title: 'Arad',
      img: 'https://i0.wp.com/aradevents.ro/wp-content/uploads/2022/12/arad-mg-9347-1.jpg?fit=1980%2C1320&ssl=1',
      isFavorite: false,
    },
    {
      title: 'Timisoara',
      img: 'https://xn--urlaub-in-rumnien-2qb.de/wp-content/uploads/2017/10/Piata-Victoriei-3-1.jpg',
      isFavorite: false,
    },
    {
      title: 'Brasov',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YrzPegtAwQyfTWZcNy8TNgHaE8%26pid%3DApi&f=1&ipt=c5839f49b1bab8642d6e84f216aa87a52be86d40912f0f30ea3d69a44c163d2b&ipo=images',
      isFavorite: false,
    },
    {
      title: 'Oradea',
      img: 'https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjEl/MkYwMyUyRjI4JTJGMTMwNjQ0Nl8xMzA2/NDQ2X29yYWRlYS5qcGcmdz03ODAmaD00/NDAmaGFzaD1hOWEwYmUzOTAwNzQxODEwOWFlODc2YWM2NTU2ZmUwYg==.thumb.jpg',
      isFavorite: false,
    },
    {
      title: 'Sibiu',
      img: 'https://holaromania.com/wp-content/uploads/2020/07/sibiu-romania-atardecer-800x522.jpg',
      isFavorite: false,
    },
    {
      title: 'Cluj-Napoca',
      img: 'https://holaromania.com/wp-content/uploads/2020/08/tamas-pap-centro-cluj-napoca.jpg',
      isFavorite: false,
    },
  ];
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

  public onFavorite(title: string) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.favorites[i].title == title) {
        this.favorites[i].isFavorite = !this.favorites[i].isFavorite;
      }
    }

    console.log(this.favorites);
  }

  public isFavorite(title: string) {
    const data = this.favorites.filter(
      (element: any) => element.title.toLowerCase() == title.toLowerCase()
    );

    if (data.length > 0) {
      return data[0].isFavorite;
    } else {
      return false;
    }
  }
}
