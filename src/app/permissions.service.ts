import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { QuizService } from './services/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService implements CanActivate{
  public flag_var = false;
  constructor(private quizSer: QuizService,private router:Router) {}
  canActivate():boolean {
    if(this.flag_var == true){
      return true;
    }
    else{
      this.router.navigate(['/landing']);
      return false;
    }
  }
  
}
