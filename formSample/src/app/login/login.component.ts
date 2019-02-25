import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isLogin=false;
  isLoginFail=false;
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit() {
  }

  login()
  {
    this.service.Login(this.model).subscribe((data) => {

      this.isLogin=true;
      setTimeout(() => {
        this.isLogin=false;
    
        this.router.navigate(['/dashboard']);
      }, 3000);
   
    },
    (err) => {
      this.isLoginFail=true;
      setTimeout(() => {
        this.isLoginFail=false;
        this.router.navigate(['/']);
      }, 3000);
    })

  }

  signup()
  {
    this.service.signUp(this.model).subscribe((data) => {
      console.log('updated todo')
      console.log(data);
      this.router.navigate(['/']);
    })
  }
  

}
