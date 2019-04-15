import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ='';
  age:number;
  isEdit:boolean = false;
  //private readonly notifier: NotifierService;

  constructor(notifer:NotifierService) {
    //this.notifier = notifer;
    this.name = 'Nahla';
    this.age = 23;
   }
  ngOnInit() {
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
    //this.notifier.notify( 'success', 'You toggled it!' );
  }
}
