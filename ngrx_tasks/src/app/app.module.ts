import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter/counter.component';
import { CounterOutputComponent } from './Counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './Counter/counter-buttons/counter-buttons.component';
import { CounteroutputComponent } from './Counter_ngrx/counteroutput/counteroutput.component';
import { CounterbuttonsComponent } from './Counter_ngrx/counterbuttons/counterbuttons.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounteroutputComponent,
    CounterbuttonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
