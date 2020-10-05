import {
    GET_POPULAR_MOVIES,
    SEARCH_MOVIES,
    LOAD_MORE_MOVIES,
    CLEAR_MOVIES,
    SHOW_LOADING_SPINNER
} from '../actions/index'


const defaultState = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
}

// It will take the present state and action will update the state based on the action in the reducer
export default function (state = defaultState, action) {
    switch(action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                heroImage: state.heroImage || action.payload.results[0],// It will grab the most popular movie and put the backdrop image in our hero image
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages,
                searchTerm: ""
            }
        case LOAD_MORE_MOVIES:
            return {
                ...state,
                movies: [...state.movies, ...action.payload.results],
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages
            }

        case SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.results,
                loading: false,
                currentPage: action.payload.page,
                totalPages: action.payload.total_pages,
                searchTerm: action.payload.searchTerm
            }
        case CLEAR_MOVIES:
            return {
                ...state,
                movies: []
            }
        case SHOW_LOADING_SPINNER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}