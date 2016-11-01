import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../shared/service/movie.service';
@Component({
  selector: 'task4',
  template: `
    <h3>Movie table</h3>
    <table class="tg">
        <tr>
            <th width="120">Title</th>
        </tr>
        <tr *ngFor="let title of titleArr">
                <td>{{title}}</td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [MovieService]
})
export class Task4Component implements OnInit{

    private titleArr: string[];

    constructor(private movieService:MovieService) {
        this.titleArr = [];
    }

    ngOnInit() {
        this.movieService.getMoviesTitleByRatingIsNull().then(titleArr => this.titleArr = titleArr);          
    }

 }