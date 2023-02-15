import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateServiceService } from './date-service.service';
import { BookServiceService } from './book-service.service';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { CourseComponent } from './course/course.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    CourseComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateServiceService, BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
