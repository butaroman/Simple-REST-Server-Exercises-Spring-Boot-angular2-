import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { Task0UserComponent } from './tasks/task0users/task0user.component';
import { Task0MovieComponent } from './tasks/task0movies/task0movie.component';
import { Task0RatingComponent } from './tasks/task0ratings/task0rating.component';
import { Task1Component } from './tasks/task1/task1.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Film manager</h1>
  <nav>
    <a routerLink="/task0users" routerLinkActive="active">Task0users</a>
    <a routerLink="/task0movies" routerLinkActive="active">Task0movies</a>
    <a routerLink="/task0ratings" routerLinkActive="active">Task0ratings</a>
    <a routerLink="/task1" routerLinkActive="active">Task1</a>
    <a routerLink="/task2" routerLinkActive="active">Task2</a>
    <a routerLink="/task3" routerLinkActive="active">Task3</a>
    <a routerLink="/task4" routerLinkActive="active">Task4</a>
    <a routerLink="/task5" routerLinkActive="active">Task5</a>
    <a routerLink="/task6" routerLinkActive="active">Task6</a>
  </nav>
  <router-outlet></router-outlet>
`, 
  styleUrls: [ './app/app.component.css' ],
  entryComponents: [Task0UserComponent, Task0MovieComponent, Task0RatingComponent, 
                    Task1Component, Task2Component, Task3Component, Task4Component, Task5Component, Task6Component]
})
export class AppComponent { 

}