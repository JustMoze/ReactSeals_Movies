import React, { useEffect, useState } from 'react';

import CategoryTitle from './CategoryTitle';
import data from '../services/data';
import MovieList from './MovieList';
import { getMovies } from './../services/movieService';

function BrowserPageComponent({ category, onPress, title }) {
    const [collectedMovies, setCollectedMovies] = useState([]);
    useEffect(() => {
        async function getSpecificMovies() {
            try {
                const { data: movies } = await getMovies(category);
                const deconstructedMovies = deconstructTheMovies(movies);
                setCollectedMovies(deconstructedMovies);
            } catch (error) {
                console.log(error);
            }
        }
        getSpecificMovies();
    }, []);
    function deconstructTheMovies(movies) {
        const movieArr = [];
        if ('results' in movies) {
            movies.results.forEach(function (movie) {
                const { id, title, overview, poster_path } = movie;
                var object = {
                    id: id,
                    title: title,
                    description: overview,
                    image: poster_path
                };
                movieArr.push(object);
            });
        } else {
            const { id, title, overview, poster_path } = movies;
            var object = {
                id: id,
                title: title,
                description: overview,
                image: poster_path
            };
            movieArr.push(object);
        }
        return movieArr;
    }
    return (
        <>
            <CategoryTitle title={title} />
            <MovieList movies={collectedMovies} onPress={onPress} />
        </>
    );
}

export default BrowserPageComponent;
