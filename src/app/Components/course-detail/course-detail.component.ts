import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  n:any;
  data:any;
  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.data = params.name);
  }

}
