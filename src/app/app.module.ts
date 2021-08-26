import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MeadCardComponent } from './mead-card/mead-card.component';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeadCardTableComponent } from './mead-card-table/mead-card-table.component';
import { MeadCardPlaceholderComponent } from './mead-card-placeholder/mead-card-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    MeadCardComponent,
    MeadCardTableComponent,
    MeadCardPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,  
    MatInputModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
