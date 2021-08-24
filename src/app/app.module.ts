import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MeadCardComponent } from './mead-card/mead-card.component';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeadCardTableComponent } from './mead-card-table/mead-card-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MeadCardComponent,
    MeadCardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,  
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
