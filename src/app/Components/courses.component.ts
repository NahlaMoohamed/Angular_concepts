import { Component } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses-service/courses.service';
import { Router } from '@angular/router';

@Component({
	selector:'courses',
	template:`<h1 class="header">Courses</h1>
	<h3>{{ getTotalNumOfCourses() +" "+ title }}</h3>
	<ul>
		<li (click)=onSelect(course) style="cursor:pointer;" *ngFor="let course of courses">
			{{ course }}
		</li>
	</ul>`
})
export class CoursesComponent{
	title = "Courses";
	courses;
	constructor(private router: Router,s: CoursesService){
		this.courses = s.getCourse();
	}
	getTotalNumOfCourses(){
		return(this.courses.length);
	}

	onSelect(course){
		this.router.navigate(['/courses',course]);
	}
}