import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iquiz } from '../quiz';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // public amount ;
  // public category;
  // public difficulty;
  // public type ;
  public amount:any;
  public category:any;
  public difficulty:any;
  public url:any;
  public httpOptions;
  // private url: string = 'https://opentdb.com/api.php?amount='+this.amount+'&category='+this.category+'&difficulty='+this.difficulty +'&type='+this.type;
  
  constructor(private http: HttpClient) { 
    this.httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    

  }
  getConstraints(amt,cat,diffi){
    this.amount = amt;
    this.category= cat;
    this.difficulty = diffi;
    this.url = 'https://opentdb.com/api.php?amount='+this.amount+'&category='+this.category+'&difficulty='+this.difficulty +'&type=multiple';
    
  }
  callingFunc(): Observable<Iquiz>{
     this.url = 'https://opentdb.com/api.php?amount='+this.amount+'&category='+this.category+'&difficulty='+this.difficulty+'&type=multiple';
    return this.http.get<Iquiz>(this.url);
  }
 

  
}
