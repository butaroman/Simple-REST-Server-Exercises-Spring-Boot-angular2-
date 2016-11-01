import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../shared/service/rating.service';
import {RatingDTO} from '../../shared/model/ratingDTO';
@Component({
  selector: 'task3',
   template: `
    <h3>Rating table</h3>
    <table class="tg">
        <tr>
            <th width="80">MovieId</th>
            <th width="120">Rating date</th>
        </tr>
        <tr *ngFor="let rating of ratingDtoArr">
                <td>{{rating.movieId}}</td>
                <td>{{getDate(rating.ratingDate)}}</td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [RatingService]
})
export class Task3Component implements OnInit{

    private ratingDtoArr: RatingDTO[];

    constructor(private ratingService:RatingService) {
        this.ratingDtoArr = [];
    }

    ngOnInit() {
        this.ratingService.getRatingDTOByRating().then(ratingDtoArr => this.ratingDtoArr = ratingDtoArr);          
    }

    getDate(date:Date):string {
        if(date===null) {
            return "";
        } else {
            return new Date(date).toLocaleDateString();
        }   
    }
 }