import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post-class/post';
import { ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/Services/data-service/data.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [DataService]
})
export class PostsComponent implements OnInit {
  posts:Post[];
  addedPost: Post;
  postFormGroup: FormGroup;
  editUserForm: FormGroup;
  totalNumOfPosts: number;

  constructor(private dataService: DataService, private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPosts();
    this.postFormGroup = this.formBuilder.group({
      ipTitle: [null],
      ipBody: [null],
      ipUserId: [null]
    });
    this.editUserForm = this.formBuilder.group({
      userId: [null]
    })
    
  }
  getPosts(){
    this.posts = this.route.snapshot.data["postsResolver"];
    this.totalNumOfPosts = this.posts.length;
  }
  createNewPost(){
    console.log('Adding the post with user id ='+ this.postFormGroup.get("ipUserId").value);
    this.addedPost = new Post(0,this.postFormGroup.get('ipTitle').value, this.postFormGroup.get('ipBody').value,this.postFormGroup.get('ipUserId').value);
    
    this.dataService.createPost(this.addedPost).subscribe((res) => {
      console.log(res);
      alert("Added successfully!");
    },
    err => {
      console.log("Error occured");
    });
    console.log('finished');
  }
  updatePostsByUserId(){
    console.log('calling the service with id = '+this.editUserForm.get('userId').value);
    this.dataService.getPostbyUserId(this.editUserForm.get('userId').value).subscribe((responsePosts) => {
      this.posts = responsePosts;
      this.totalNumOfPosts = responsePosts.length;
    },
    err => {
      console.log("Error occured");
    });
    console.log('finished');
  }
}
