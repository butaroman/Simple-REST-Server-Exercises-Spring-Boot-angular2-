import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Rating} from "../model/rating";
import {RatingDTO, RatingDTO2} from "../model/ratingDTO";


@Injectable()
export class RatingService {

     private url:string = 'http://localhost:8080//';
     

     constructor(private http: Http) {}

     getAllRatings(): Promise<Rating[]> {
        return this.http.get(this.url + "task0ratings")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getAllRatingAndSetLocalDate(): Promise<Rating[]> {
        return this.http.get(this.url + "task1")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getRatingDTOByRating(): Promise<RatingDTO[]> {
        return this.http.get(this.url + "task3")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

     getAllRatingDTO2(): Promise<RatingDTO2[]> {
        return this.http.get(this.url + "task6")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    deleteRating(rating: Rating): Promise<Rating> {
        return this.http.delete(this.url + '/rating/' + rating.id)
                    .toPromise()
                    .then(res => rating)
                    .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    }
}