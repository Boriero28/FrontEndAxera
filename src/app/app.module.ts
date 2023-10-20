import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { MinecraftBaseComponent } from './components/minecraft-base/minecraft-base.component';
import { MinecraftAvanzatoComponent } from './components/minecraft-avanzato/minecraft-avanzato.component';
import { LegoLeagueComponent } from './components/lego-league/lego-league.component';
import { Modellazione3DComponent } from './components/modellazione3-d/modellazione3-d.component';
import { SmartphoneComponent } from './components/smartphone/smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MinecraftBaseComponent,
    MinecraftAvanzatoComponent,
    LegoLeagueComponent,
    Modellazione3DComponent,
    SmartphoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
