import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../shared/service/movie.service';
import {Movie} from '../../shared/model/movie';
@Component({
  selector: 'task0movies',
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
                <td><button (click)="deleteMovie(movie)">Delete</button></td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [MovieService]
})
export class Task0MovieComponent implements OnInit{

    private movieArr: Movie[];

    constructor(private movieService:MovieService) {
        this.movieArr = [];
    }

    ngOnInit() {
        this.movieService.getAllMovies().then(movieArr => this.movieArr = movieArr);          
    }

    deleteMovie(movie: Movie):void {
        this.movieService.deleteMovie(movie).then(movie => this.deleteMovieFromArr(movie));
    }

     private deleteMovieFromArr(movie:Movie): void {
         let index = this.movieArr.indexOf(movie);
         if(index > -1) {
            this.movieArr.splice(index, 1);
         }
    }

 }