import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Iquiz } from 'src/app/quiz';
import {Result} from 'src/app/results';
import { log } from 'util';
import { FormGroup, FormControl } from '@angular/forms';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  
  public question_list: any;
  public res:string
  public totalQuestions: any;
  public questions: any;
  public correctAns: any;
  public incorrectAns : any;
  public flag = 0;
  public score_flag = 0;
  public ans:string;
  public display = 'close';
  public faHeart = faHeart;
  public repo: any;
  userForm = new FormGroup({
    optradio: new FormControl()
  })
  constructor(private quizServ: QuizService) { 
    this.totalQuestions =  this.quizServ.amount;
  }

  ngOnInit(): void {
    console.log(this.quizServ.url);
    this.quizServ.callingFunc()
    .subscribe(data => {this.res = data.response_code;
      this.question_list = data.results;
      this.some_func();
    });
  }
  some_func(){
    for(let i =this.flag; i == this.flag && i<this.question_list.length ; i++ ){

      this.questions = this.question_list[i].question;
      this.correctAns = this.question_list[i].correct_answer;
      this.incorrectAns = this.question_list[i].incorrect_answers;
      this.flag++;
      console.log(i);
      break;
    }
    
  }
  xyz(){
    
    if(this.userForm.get('optradio').value == this.correctAns){
      this.score_flag++;
    }
    if(this.flag == this.question_list.length){
      this.display = 'open';
    }
    else{
      this.some_func();
    }
    
    
  } 
}