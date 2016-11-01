import {User} from "./user";
import {Movie} from "./movie";

export class Rating {
    id: number;
    rating: number;
    ratingDate: Date;
    user: User;
    movie: Movie;
}