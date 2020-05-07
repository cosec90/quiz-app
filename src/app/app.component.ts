import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  constructor(){
    // $(document).ready(function(){
    //   $("#startBtn").click(function(){
    //     $(".custom-model").css("display","block");
    //   });
    //   $("#close").click(function(){
    //     $(".custom-model").css("display","none");
    //   });
    // }); 
    
  }
  title = 'quiz-app';
}
