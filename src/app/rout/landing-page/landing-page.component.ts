import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { PermissionsService } from 'src/app/permissions.service';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public display = 'close';
  public number: any;
  public cat:any;
  public difficult: any;
  public faTimes = faTimes;
  public faHeart = faHeart;
  public faBars =  faBars;
    typeForm = new FormGroup({
    questionNumber: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    difficulty: new FormControl('',Validators.required)
  });
 
  constructor(private quizServ: QuizService, private router:Router, private permis: PermissionsService) { }

  ngOnInit(): void {
    
  }
  displayModel(){
    this.display = 'open';
  }
  closeModel(){
   this.display = 'close';
  }
  type_submit(){
    if(this.typeForm.get('questionNumber').value != '' && this.typeForm.get('category').value != '' && this.typeForm.get('difficulty').value != '' ){
    this.number = this.typeForm.get('questionNumber').value;
    this.cat = this.typeForm.get('category').value;
    this.difficult = this.typeForm.get('difficulty').value;
    this.quizServ.getConstraints(this.number,this.cat,this.difficult);
    this.permis.flag_var = true;
    this.router.navigate(['/questions'])
    }
    else{
      alert("Please fill the form correctly");
    }
    
    
    
    
  }
  

}
