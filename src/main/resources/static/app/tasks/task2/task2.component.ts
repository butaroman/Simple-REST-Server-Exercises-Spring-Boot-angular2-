import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../shared/service/movie.service';
import {Movie} from '../../shared/model/movie';
@Component({
  selector: 'task2',
  template: `
    <h3>Movie table</h3>
    <table class="tg">
        <tr>
            <th width="80">ID</th>
            <th width="120">Title</th>
            <th width="120">Director</th>
        </tr>
        <tr *ngFor="let movie of movieArr">
                <td>{{movie.id}}</td>
                <td>{{movie.title}}</td>
                <td>{{movie.director}}</td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [MovieService]
})
export class Task2Component implements OnInit{

    private movieArr: Movie[];

    constructor(private movieService:MovieService) {
        this.movieArr = [];
    }

    ngOnInit() {
        this.movieService.saveStaticMovies().then(movieArr =>  this.movieArr = movieArr);      
    }

    addMovie(movie: Movie):void {
        this.movieService.addMovie(movie).then(movie=> this.movieArr.push(movie));
    }
 }