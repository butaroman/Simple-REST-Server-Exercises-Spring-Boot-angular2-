package com.roman.buta.controller;

import com.roman.buta.model.Movie;
import com.roman.buta.service.MovieService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class MovieController {

    private static final Logger log = Logger.getLogger(MovieController.class);

    @Autowired
    MovieService movieService;

    @RequestMapping(value = "/task0movies", method = RequestMethod.GET)
    public ResponseEntity<List<Movie>> getAllMovie() {
        List<Movie> movieList = movieService.findAll();
        return new ResponseEntity<>(movieList, HttpStatus.OK);
    }

    @RequestMapping(value="/task2", method = RequestMethod.GET)
    public ResponseEntity<List<Movie>> saveStaticMovies() {
        Movie m1 = new Movie(9, "Deadpool", "Tim Miller");
        Movie m2 = new Movie(10, "The 300 spartans", "Zak Snyder");
        movieService.addMovie(m1);
        movieService.addMovie(m2);
        log.info("Add movie: " + movieService.addMovie(m1));
        log.info("Add movie: " + movieService.addMovie(m2));
        return new ResponseEntity<>( movieService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value="saveMovie", method = RequestMethod.POST)
    public ResponseEntity<Movie> saveMovie(@RequestBody Movie movie) {
        log.info("Save movie: " + movie);
        return new ResponseEntity<>( movieService.addMovie(movie), HttpStatus.OK);
    }

    @RequestMapping(value = "/task4", method = RequestMethod.GET)
    public ResponseEntity<List<String>> getMoviesTitleByRatingIsNull() {
        List<String> titleList = new ArrayList<>();
        for(Movie m: movieService.findByRatingIsNull()) {
            titleList.add(m.getTitle());
        }
        return new ResponseEntity<>(titleList, HttpStatus.OK);
    }

    @RequestMapping(value = "/task5", method = RequestMethod.GET)
    public ResponseEntity<List<Movie>> deleteMovie() {
        int movieId1 = 9;
        int movieId2 = 10;
        log.info("Delete movies with id: " + movieId1 + ", " + movieId1 );
        movieService.deleteMovie(movieId1);
        movieService.deleteMovie(movieId2);

        return new ResponseEntity<>(movieService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Movie> deleteMovie(@PathVariable("id") Integer id) {
        log.info("Delete movie with id: " + id );
        movieService.deleteMovie(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
