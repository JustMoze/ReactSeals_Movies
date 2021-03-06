import React, { useEffect, useState } from 'react';

import CategoryTitle from './CategoryTitle';
import MovieList from './MovieList';
import {
    getMovies,
    similarMovies,
    romanticMovies
} from './../services/movieService';
import { IMAGES_PATH } from 'react-native-dotenv';

function BrowserPageComponent({
    category,
    movieId = null,
    realted = false,
    romatic = false,
    onPress,
    style,
    title
}) {
    const [collectedMovies, setCollectedMovies] = useState([]);
    useEffect(() => {
        async function getSpecificMovies() {
            try {
                if (realted) {
                    const { data: movies } = await similarMovies(movieId);
                    const deconstructedMovies = deconstructTheMovies(movies);
                    setCollectedMovies(deconstructedMovies);
                } else if (romatic) {
                    const { data: movies } = await romanticMovies();
                    const deconstructedMovies = deconstructTheMovies(movies);
                    setCollectedMovies(deconstructedMovies);
                } else {
                    const { data: movies } = await getMovies(category);
                    const deconstructedMovies = deconstructTheMovies(movies);
                    setCollectedMovies(deconstructedMovies);
                }
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
                    description: overview,
                    image: `${IMAGES_PATH}${poster_path}`,
                    title: title
                };
                movieArr.push(object);
            });
        } else {
            const { id, title, overview, poster_path } = movies;
            var object = {
                id: id,
                description: overview,
                image: poster_path,
                title: title
            };
            movieArr.push(object);
        }
        return movieArr;
    }
    return (
        <>
            <CategoryTitle title={title} style={style} />
            <MovieList movies={collectedMovies} onPress={onPress} />
        </>
    );
}

export default BrowserPageComponent;
