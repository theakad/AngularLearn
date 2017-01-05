import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import {TodoComponent} from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  RouterModule.forRoot([
    { path: '', redirectTo: '/todo', pathMatch: 'full'}
  ]),
    TodoModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
