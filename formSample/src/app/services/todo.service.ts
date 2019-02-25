import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{SignUpModel} from '../model/SignUpModel';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:65162/api';

  createToDo(data){
    return this.http.post<any>(this.baseUrl+'/AddTask', data)
  }

  deleteTask(id: Number){
    return this.http.delete<any>(this.baseUrl+'/DeleteTask?id=' + id)
  }

  updateTodo(id: Number, data: any){
    return this.http.put<any>(this.baseUrl+'/PutEmployee?id=' + id, data)
  }


  signUp(data: SignUpModel){
    return this.http.post<SignUpModel>(this.baseUrl+'/Signup', data)
  }

  Login(data: any){
    return this.http.post<any>(this.baseUrl+'/Login', data)
  }

  getUserList() {
    return this.http.get<any>(this.baseUrl+'/GetAllResource')
  }

  getAllTask() {
    return this.http.get<any>(this.baseUrl+'/GetAllTasks')
  }
  GetTaskByID(id){
    return this.http.get<any>(this.baseUrl+'/GetTaskByID?id=' + id)
  }

}
