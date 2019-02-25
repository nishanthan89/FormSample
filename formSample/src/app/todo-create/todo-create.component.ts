import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { TodoService } from '../services/todo.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { createTaskmodel } from '../model/createTaskModel';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  //taskModel: any = { };
  //model: any={};


  taskModel = new createTaskmodel(null,"","",null,"","");
  resourceList: any = {};
  isCreated = false;
  //errorMessage = '';

  constructor(private service: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getUserList().subscribe((data) => {
      this.resourceList = data;
      // this.router.navigate(['/dashboard']);
    })
  //this is for edit part, to launch data to that same screen
    //api/GetAllResource
    let id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.GetTaskByID(id).subscribe((data) => {
        console.log("Hello Response");
        console.log(data);
        this.taskModel = data;
      })
    }
  }

  save() {

    if (id===0) {
      console.log(this.taskModel);
      this.service.updateTodo(id, this.taskModel).subscribe((data) => {
        console.log('updated todo')
        console.log(data);
        this.router.navigate(['/dashboard']);
      })
    } else {
      console.log('created testttttttt')
      console.log(this.taskModel);
      this.service.createToDo(this.taskModel).subscribe((data) => {
     


        this.isCreated = true;
       // this.errorMessage  = data;

        setTimeout(() => {
          this.isCreated = false;
          this.router.navigate(['/dashboard']);
        }, 3000);


      })
   }



  }

}
