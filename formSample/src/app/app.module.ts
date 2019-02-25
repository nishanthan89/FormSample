import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FilterdataPipe } from './Search/filterdata.pipe';



@NgModule({
  declarations: [
    AppComponent,

    TodoListComponent,
    TodoCreateComponent,
    SignUpComponent,
    LoginComponent,
    FilterdataPipe,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent] //This is the statup project component
})
export class AppModule { }
