// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TaskService } from './task.service';
import { Task } from './task';

@Component({
    moduleId: module.id,
    selector: 'my-task-detail',
    templateUrl: 'task-detail.component.html',
    styleUrls: [ 'task-detail.component.css' ],
})

export class TaskDetailComponent implements OnInit {
    @Input()
    task: Task;

    constructor(
	private taskService: TaskService,
	private route: ActivatedRoute,
	private location: Location
    ) {}

    ngOnInit(): void {
	this.route.params.forEach((params: Params) => {
	    let id = params['id'];
	    this.taskService.getTask(id)
		.then(task => this.task = task);
	});
    }

    goBack(): void {
	this.location.back();
    }

    save(): void {
	this.taskService.update(this.task)
	    .then(() => this.goBack());
    }
}
