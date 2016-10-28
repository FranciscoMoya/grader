import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TaskService {
    private tasksUrl = 'app/tasks';  // URL to web api

    constructor(private http: Http) { }

    getTasks(): Promise<Task[]> {
	return this.http.get(this.tasksUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    getTasksSlowly(): Promise<Task[]> {
	return new Promise<Task[]>(resolve => setTimeout(resolve, 2000))
	    .then(() => this.getTasks());
    }

    getTask(id: string): Promise<Task> {
	return this.getTasks()
            .then(tasks => tasks.find(task => task.id === id));
    }

    private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
    }
}
