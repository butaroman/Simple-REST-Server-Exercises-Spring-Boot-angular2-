import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Movie} from "../model/movie";

@Injectable()
export class MovieService {

     private url:string = 'http://localhost:8080/';

     constructor(private http: Http) {}

    getAllMovies(): Promise<Movie[]> {
        return this.http.get(this.url+"task0movies")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

   addMovie(movie:Movie): Promise<Movie> {
       let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       return this.http.post(this.url + "task2", JSON.stringify(movie), options)
                        .toPromise()
                        .then(res => res.json())
                        .catch(this.handleError);
    }

    saveStaticMovies(): Promise<Movie[]> {
       return this.http.get(this.url+"task2")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

     getMoviesTitleByRatingIsNull(): Promise<string[]> {
        return this.http.get(this.url + "task4")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    getMovies(): Promise<Movie[]> {
        return this.http.get(this.url+"task5")
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    }
}