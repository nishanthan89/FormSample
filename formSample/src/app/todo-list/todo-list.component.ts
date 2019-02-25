import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  allTaskList: any[];
  searchTerm: string;
  
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {

    this.todoService.getAllTask().subscribe((data) => {
      console.log(data);
      this.allTaskList = data;
    });
    
  }

  delete(id){
    console.log("Delete id sss;ssssssssssssssssssssssss");
    console.log(id);
    this.todoService.deleteTask(id).subscribe(() => {

      this.todoService.getAllTask().subscribe((data) => {
        console.log(data);
        this.allTaskList = data;
      });

    })
  }

  update(id){
    this.router.navigate(['/create/' + id]);
  }

}
