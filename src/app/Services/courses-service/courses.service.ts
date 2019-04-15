import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
	getCourse()
	{
		return ['Course 1','Course 2','Course 3'];
	}
}
