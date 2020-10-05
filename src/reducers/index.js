import { combineReducers } from 'redux';  // It combines the reducers into one
import home from './home_reducer';
import movie from './movie_reducer';

// combining our reducers
const rootReducer = combineReducers({
    home,
    movie
});

export default rootReducer;