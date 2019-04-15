import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/of';
import { Router } from "@angular/router";
import { DataService } from './Services/data-service/data.service';

@Injectable({
  providedIn: 'root'
})

export class AppResolverService implements Resolve<any> {

  constructor(route:Router,private serv:DataService) { }

  resolve(){
    console.log('Logging collected route parameter');
    return this.serv.getPosts();
  }

}
