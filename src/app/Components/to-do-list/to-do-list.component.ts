import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Todo } from "src/app/classes/todo-class/todo";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  //toDoList = new Map<string, boolean>();
  toDoList: Todo[];

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      toDoListInput: [null]
    })
    this.toDoList = new Array<Todo>();
  }

  appendToList(){
    this.toDoList.push(new Todo(this.myForm.get('toDoListInput').value,true));
  }

  listItemDone(item){
    //this.toDoList.forEach((value: boolean, key: string) => {
    for(let i=0; i< this.toDoList.length;i++){
      if(this.toDoList[i].todo === item){
        this.toDoList.splice(i,1,new Todo(item,false));
      }
    }
  }
  deleteItem(item){
    for(let i=0; i< this.toDoList.length;i++){
      if(this.toDoList[i].todo === item){
        this.toDoList.splice(i,1);
      }
    }
  }

  getActiveElements(){
    var count = 0;
    for(let item of this.toDoList)
    {
      if(item.isDone === true)
      {
        count +=1;
      }
    }
    return count;
  }
}
