import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';
import { Level4Component } from './level4/level4.component';
import { Level5Component } from './level5/level5.component';
import { Level6Component } from './level6/level6.component';
import { Level7Component } from './level7/level7.component';
import { Level8Component } from './level8/level8.component';
import { Level9Component } from './level9/level9.component';
import { Level10Component } from './level10/level10.component';
import { Level11Component } from './level11/level11.component';
import { Level12Component } from './level12/level12.component';
import { Level13Component } from './level13/level13.component';
import { Level14Component } from './level14/level14.component';
import { Level15Component } from './level15/level15.component';
import { RegisterComponent } from './register/register.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    Level5Component,
    Level6Component,
    Level7Component,
    Level8Component,
    Level9Component,
    Level10Component,
    Level11Component,
    Level12Component,
    Level13Component,
    Level14Component,
    Level15Component,
    RegisterComponent,
    LeaderboardComponent
  ],
  imports: [
     BrowserModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MaterialModule,
     FormsModule,
     AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
