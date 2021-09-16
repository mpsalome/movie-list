import axios  from "axios";

const API_KEY = '70f073428ed38fc162b3f04fc685eee5'
const BASE_URL = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    static getPopularMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getNowPlayingMovies() {
        return axios(withBaseUrl('movie/now_playing'))
    }

    static getTopRatedMovies() {
        return axios(withBaseUrl('movie/top_rated'))
    }

    static getUpcomingMovies() {
        return axios(withBaseUrl('movie/upcoming'))
    }
    
    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}