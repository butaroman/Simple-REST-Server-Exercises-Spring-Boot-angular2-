import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../shared/service/rating.service';
import {RatingDTO2} from '../../shared/model/ratingDTO';
@Component({
  selector: 'task6',
   template: `
    <h3>Rating table</h3>
    <table class="tg">
        <tr>
            <th width="80">Movie title</th>
             <th width="80">User name</th>
            <th width="120">Rating</th>
        </tr>
        <tr *ngFor="let rating of ratingDtoArr">
                <td>{{rating.movieTitle}}</td>
                <td>{{rating.userName}}</td>
                <td>{{rating.rating}}</td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [RatingService]
})
export class Task6Component implements OnInit{

    private ratingDtoArr: RatingDTO2[];

    constructor(private ratingService:RatingService) {
        this.ratingDtoArr = [];
    }

    ngOnInit() {
        this.ratingService.getAllRatingDTO2().then(ratingDtoArr => this.ratingDtoArr = ratingDtoArr);          
    }
 }