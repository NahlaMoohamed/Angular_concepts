import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/classes/post-class/post';

//import { from } from 'rxjs';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  serviceUrl = 'http://jsonplaceholder.typicode.com/posts';
  constructor(public http:HttpClient) {
    console.log('Data service connercted');
  }

  getPosts(){
    return this.http.get<Post[]>(this.serviceUrl);
  }
  getPostbyUserId(id: number){
    console.log(`${this.serviceUrl}?userId=${id}`);
    return this.http.get<Post[]>(`${this.serviceUrl}?userId=${id}`);
  }
  createPost(post: Post){
    console.log('Adding the new post.');
    return this.http.post(`${this.serviceUrl}/`,[post.title,post.body,post.userId]);
  }
  updatePost(post: Post){
    return this.http.put(`${this.serviceUrl}/${post.id}`,post);
  }
  deletePost(postId:number)
  {
    return this.http.delete(`${this.serviceUrl}/${postId}`);
  }
}