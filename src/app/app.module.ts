import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionPageComponent } from './rout/question-page/question-page.component';
import { NavbarComponent } from './rout/navbar/navbar.component';

import { QuizService } from './services/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {PermissionsService} from './permissions.service';
import { LandingPageComponent } from './rout/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    QuestionPageComponent,
    NavbarComponent,
    LandingPageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [QuizService,PermissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
