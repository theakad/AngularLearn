import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TodoService } from '../_shared/_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todos = [];
  private isLoading = true;

  private todo = {};
  private isEditing = false;

  private addTodoForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private cpf = new FormControl("");

  private infoMsg = { body: "", type: "info" };

  constructor(private http: Http,
    private formBuilder: FormBuilder,
    private _todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();

    this.addTodoForm = this.formBuilder.group({
      name: this.name,
      cpf: this.cpf
    });

  }

  getTodos() {
    this._todoService.getAll().subscribe(
      data => this.todos = data,
      error => console.log('teste akad'),
      () => this.isLoading = false
    );
  }

  addTodo() {

    this._todoService.add(this.addTodoForm.value).subscribe(
      res => {
        let newTodo = res;
        this.todos.push(newTodo);
        this.addTodoForm.reset();
        this.sendInfoMsg("item added successfully!!!", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(todo) {
    this.isEditing = true;
    this.todo = todo;
  }

  cancelEditing() {
    this.isEditing = false;
    this.todo = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    // reload the todos to reset the editing
    this.getTodos();
  }

  editTodo(todo) {
    this._todoService.update(todo).subscribe(
      res => {
        this.isEditing = false;
        this.todo = todo;
        this.sendInfoMsg("Item editado", "Sucessso!");
      },
      error => console.log(error)
    );
  }

  deleteTodo(todo) {
    if (window.confirm("Deseja realmente excluir?")) {
      this._todoService.remove(todo).subscribe(
        res => {
          var pos = this.todos.map(client => { return client.id }).indexOf(todo.id);
          this.todos.splice(pos, 1);
          this.sendInfoMsg("Item excluido!", "Sucesso!");
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

}
