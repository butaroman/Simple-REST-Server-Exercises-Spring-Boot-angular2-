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

    addStaticMovie():void {
       let m1 = new Movie();
       m1.id = 9;
       m1.title = "Deadpool";
       m1.director = "Tim Miller";

       let m2 = new Movie();
       m2.id = 10;
       m2.title = "The 300 spartans";
       m2.director = " Zak Snyder";
    }

 }