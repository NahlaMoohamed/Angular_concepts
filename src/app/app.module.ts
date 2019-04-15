import { CoursesService } from './Services/courses-service/courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './Services/data-service/data.service';
import { CourseDetailComponent } from './Components/course-detail/course-detail.component';
import { PostsComponent } from './Components/posts/posts.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CourseDetailComponent,
    PostsComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [
    CoursesService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
