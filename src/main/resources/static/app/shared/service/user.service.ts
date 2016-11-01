import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {User} from "../model/user";

@Injectable()
export class UserService {

     private url:string = 'http://localhost:8080/task0users';

     constructor(private http: Http) {}

     getAllUsers(): Promise<User[]> {
         console.log("UserService.getAllUsers()");
        return this.http.get(this.url)
                 .toPromise()
                 .then(res => res.json())
                 .catch(this.handleError);
    }

    private handleError(error: any):Promise<any> {
        console.log('HandleError', error);
        return Promise.reject(error.message || error);
    }
}