import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar, 
    SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, providers: [PokemonService] }],
  bootstrap: [AppComponent]
})
export class AppModule {}
