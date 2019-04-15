import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './Components/courses.component';
import { UserComponent } from './Components/user/user.component';
import { CourseDetailComponent } from './Components/course-detail/course-detail.component';
import { AppResolverService } from './app-resolver.service';
import { PostsComponent } from './Components/posts/posts.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';

const routes: Routes = [
  {path: 'courses', component:CoursesComponent},
  {
    path: 'users', 
    component: UserComponent
  },
  {
    path: 'posts', 
    component: PostsComponent,
    resolve:{postsResolver: AppResolverService}
  },
  {path: 'courses/:name', component:CourseDetailComponent}
  ,{
    path:'todolist',
    component:ToDoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppResolverService]
})
export class AppRoutingModule { }
export const routingComponents = [CoursesComponent,UserComponent,CourseDetailComponent];
