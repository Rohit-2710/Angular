import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter/counter.component';
import { CounterOutputComponent } from './Counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './Counter/counter-buttons/counter-buttons.component';
import {StoreModule} from '@ngrx/store'
import { counterReducer } from './Counter_ngrx/State/Counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
