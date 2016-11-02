package com.roman.buta.service.impl;

import com.roman.buta.model.Movie;
import com.roman.buta.repository.MovieRepository;
import com.roman.buta.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    @Transactional
    public Movie addMovie(Movie movie) {
        if(!movieRepository.exists(movie.getId())) {
            return movieRepository.saveAndFlush(movie);
        }
        return null;
    }

    @Override
    @Transactional
    public Movie findById(int id) {
        return movieRepository.findOne(id);
    }

    @Override
    @Transactional
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    @Transactional
    public List<Movie> findByRatingIsNull() {
        return movieRepository.findByRatingIsNull();
    }

    @Override
    @Transactional
    public boolean deleteMovie(int movieId) {
        if(movieRepository.exists(movieId)) {
            movieRepository.delete(movieId);
            return true;
        } else {
            return false;
        }
    }
}
