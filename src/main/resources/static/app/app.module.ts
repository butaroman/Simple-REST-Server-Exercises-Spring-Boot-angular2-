import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Task0UserComponent } from './tasks/task0users/task0user.component';
import { Task0MovieComponent } from './tasks/task0movies/task0movie.component';
import { Task0RatingComponent } from './tasks/task0ratings/task0rating.component';
import { Task1Component } from './tasks/task1/task1.component';
import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';
import { UserService } from './shared/service/user.service';
import { MovieService } from './shared/service/movie.service';
import { RatingService } from './shared/service/rating.service';
import { PageNotFoundComponent } from './page_not_found.component';

@NgModule({
  imports:      [ BrowserModule,  HttpModule, RouterModule.forRoot([
      { path: 'task0users', component: Task0UserComponent },
      { path: '', redirectTo: '/task0users', pathMatch: 'full'},
      { path: 'task0movies', component: Task0MovieComponent },
      { path: 'task0ratings', component: Task0RatingComponent },
      { path: 'task1', component: Task1Component },
      { path: 'task2', component: Task2Component },
      { path: 'task3', component: Task3Component },
      { path: 'task4', component: Task4Component },
      { path: 'task5', component: Task5Component },
      { path: 'task6', component: Task6Component },
      { path: '**', component: PageNotFoundComponent }
    ])],
  declarations: [ AppComponent, Task0UserComponent, Task0MovieComponent, 
                  Task0RatingComponent, Task1Component, Task2Component, Task3Component, 
                  Task4Component, Task5Component, Task6Component,PageNotFoundComponent],
  bootstrap:    [ AppComponent ],
  providers: [ UserService, MovieService, RatingService ]
})
export class AppModule { }