import axios  from "axios";

const API_KEY = '70f073428ed38fc162b3f04fc685eee5'
const BASE_URL = 'https://api.themoviedb.org/3/'

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }
    
    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}