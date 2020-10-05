import React, { Component } from 'react';
// To connect this component to the redux store
import { connect } from 'react-redux';
// Then, import all our action creators
import {
    getPopularMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    showLoadingSpinner
} from '../actions';

import Home from '../components/Home/Home'


class HomeContainer extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        // from our props we grabbed our action creators
        this.props.showLoadingSpinner(); // showing the loading spinner because we are grabbing data
        this.props.getPopularMovies()  // grab the popular movies
    }

    searchMovies = searchTerm => {
        //When we search for movies, we want movies that already showing to disappear and loading spinner to show
        // else they will be present there and loading spinner would be present below them
        this.props.clearMovies();
        this.props.showLoadingSpinner(); // showing the loading spinner because we are grabbing data
        this.props.searchMovies(searchTerm);
    }

    loadMoreMovies = () => {
        const { searchTerm, currentPage } = this.props;  // destructuring

        this.props.showLoadingSpinner();
        this.props.loadMoreMovies(searchTerm, currentPage);
    }

    render() {
        return (
            <Home
                {...this.props}
                searchMovies={this.searchMovies}
                loadMoreMovies={this.loadMoreMovies}
            />
        );
    }
}


const mapStateToProps = state => {
    //returning home from redux state
    return state.home;
}

// dispatching our actions to props
const mapDispatchToProps = {
    getPopularMovies,
    searchMovies,
    loadMoreMovies,
    clearMovies,
    showLoadingSpinner
}


export default connect(  // A higher order function 
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer); // HomeContainer gets connect to the redux store

// class Home extends Component {


//     componentDidMount() {
//       if (sessionStorage.getItem('HomeState')) {
//         let state = JSON.parse(sessionStorage.getItem('HomeState'))
//         this.setState({ ...state })
//       } else {
//         this.setState({ loading: true })
//         this.fetchItems(endpoint);
//       }
//     }

//     searchItems = (searchTerm) => {
//       let endpoint = '';
//       this.setState({
//         movies: [],
//         loading: true,
//         searchTerm
//       })


//       this.fetchItems(endpoint);
//     }

//     loadMoreItems = () => {
//       // ES6 Destructuring the state
//       const { searchTerm, currentPage } = this.state;

//       let endpoint = '';
//       this.setState({ loading: true })


//       this.fetchItems(endpoint);
//     }

//     fetchItems = (endpoint) => {
//       // ES6 Destructuring the state
//       const { movies, heroImage, searchTerm } = this.state;


//     }