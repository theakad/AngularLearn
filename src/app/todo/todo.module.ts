import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import {TodoService} from '../_shared/_services/todo.service';
import { SharedModule }   from '../_shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
      SharedModule,
      TodoRoutingModule,
      NgbModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }