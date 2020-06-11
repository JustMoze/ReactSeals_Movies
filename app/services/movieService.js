import http from './httpService';
import { API_KEY } from 'react-native-dotenv';
import { MOVIES_API_URL } from 'react-native-dotenv';
export function getMovies(category) {
    return http.get(
        MOVIES_API_URL + `${category}?api_key=${API_KEY}&language=en-US&page=1`
    );
}
export function similarMovies(movieId) {
    return http.get(
        MOVIES_API_URL +
            `${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
}
export function romanticMovies() {
    return http.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
}
export function getVideos(movieID) {
    return http.get(
        MOVIES_API_URL + `${movieID}/videos?api_key=${API_KEY}&language=en-US`
    );
}
export function constructTrailerUrl(key) {
    return `https://www.youtube.com/watch?v=${key}`;
}
