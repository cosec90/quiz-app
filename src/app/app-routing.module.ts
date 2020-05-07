import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuestionPageComponent } from './rout/question-page/question-page.component';
import { LandingPageComponent } from './rout/landing-page/landing-page.component';
import { PermissionsService } from './permissions.service';



// tslint:disable-next-line: no-trailing-whitespace
const routes: Routes = [  
  {path: '', redirectTo:'/landing', pathMatch: 'full' },
  {path: 'landing', component: LandingPageComponent },
  {path: 'questions', canActivate:[PermissionsService] ,component: QuestionPageComponent}
  // {path: '', component: LaandingPageComponent }
 // tslint:disable-next-line: no-trailing-whitespace
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
