import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrawerComponent } from './dashboard/components/drawer/drawer.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { WeatherInfoComponent } from './dashboard/components/weather-info/weather-info.component';
import { LocationInfoComponent } from './dashboard/components/location-info/location-info.component';
import { TownPreviewComponent } from './town-preview/town-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    DrawerComponent,
    FavoritesComponent,
    UserPreviewComponent,
    CustomSearchComponent,
    WeatherInfoComponent,
    LocationInfoComponent,
    TownPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
