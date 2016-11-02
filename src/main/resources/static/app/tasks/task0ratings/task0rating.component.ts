import {Component, OnInit} from '@angular/core';
import {RatingService} from '../../shared/service/rating.service';
import {Rating} from '../../shared/model/rating';
@Component({
  selector: 'task0ratings',
   template: `
    <h3>Rating table</h3>
    <table class="tg">
        <tr>
            <th width="80">ID</th>
            <th width="120">Title</th>
            <th width="120">Rating date</th>
        </tr>
        <tr *ngFor="let rating of ratingArr">
                <td>{{rating.id}}</td>
                <td>{{rating.rating}}</td>
                <td>{{getDate(rating.ratingDate)}}</td>
                <td><button (click)="deleteRating(rating)">Delete</button></td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [RatingService]
})
export class Task0RatingComponent implements OnInit{

    private ratingArr: Rating[];

    constructor(private ratingService:RatingService) {
        this.ratingArr = [];
    }

    ngOnInit() {
        this.ratingService.getAllRatings().then(ratingArr => this.ratingArr = ratingArr);          
    }

    getDate(date:Date):string {
        if(date===null) {
            return "";
        } else {
            return new Date(date).toLocaleDateString();
        }   
    }

    deleteRating(rating: Rating):void {
        this.ratingService.deleteRating(rating).then(rating => this.deleteRatingFromArr(rating));
    }

     private deleteRatingFromArr(rating:Rating): void {
         let index = this.ratingArr.indexOf(rating);
         if(index > -1) {
            this.ratingArr.splice(index, 1);
         }
    }
 }