import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/components/calendar/calendar'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';

import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate.component';
import { cloneService } from './cloneService';


@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    SliderModule
  ],
  providers: [cloneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
