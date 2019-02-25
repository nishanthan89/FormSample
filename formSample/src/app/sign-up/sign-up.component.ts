import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { SignUpModel } from '../model/SignUpModel';
import {  } from '../model/SignUpModel';
//import{SignUpModel} from '../model/SignUpModel';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
//  model: any = {};
  //model: SignUpModel[];
  signupModel =new SignUpModel(0,"","","","","","");
  isSignup=false;
  
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit() {
    //this.model=null;  
  }

  signup()
  {

    this.service.signUp(this.signupModel).subscribe((data) => {

      this.isSignup=true;

      setTimeout(() => {
        this.isSignup = false;
        this.router.navigate(['/']);
      }, 3000);


      
    })
  }
}
