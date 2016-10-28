import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';

import { TasksComponent }      from './tasks.component';
import { TaskDetailComponent }  from './task-detail.component';
import { TaskService }          from './task.service';

import './rxjs-extensions';

@NgModule({
    imports: [
	BrowserModule,
	FormsModule,
	HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule
    ],
    declarations: [
	AppComponent,
	DashboardComponent,
	TaskDetailComponent,
	TasksComponent,
    ],
    providers: [ TaskService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
