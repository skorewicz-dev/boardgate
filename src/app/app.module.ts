import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConnectionModule } from './connection/connection.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ConnectionModule,
    RouterModule.forRoot([
      {path: 'lobby', component: LobbyComponent },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: '/welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
