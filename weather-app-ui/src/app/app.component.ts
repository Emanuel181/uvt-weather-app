import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Weather';
  version = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}
