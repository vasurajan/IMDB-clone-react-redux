import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getMovie,
  showLoadingSpinner,
  clearMovie
} from '../actions';

import Movie from '../components/Movie/Movie';

class MovieContainer extends Component {
  componentDidMount() {

    const { movieId } = this.props.match.params;
    this.getMovie(movieId);
  }

  getMovie = movieId => {
    this.props.clearMovie();
    this.props.showLoadingSpinner();
    this.props.getMovie(movieId);

  }

  render() {
    return (
      <Movie
        movie={this.props.movie}
        directors={this.props.directors}
        actors={this.props.actors}
        loading={this.props.loading}
      />
    )
  }
}


const mapStateToProps = state => {
  //returning movie from redux state
  return state.movie;
}

const mapDispatchToProps = {
  getMovie,
  clearMovie,
  showLoadingSpinner
}

export default connect(  // A higher order function 
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer); // HomeContainer gets connect to the redux store






























// state = {
//     movie: null,
//     actors: null,
//     directors: [],
//     loading: false
//   }

//   componentDidMount() {
//     // ES6 destructuring the props
//     const { movieId } = this.props.match.params;

//     if (localStorage.getItem(`${movieId}`)) {
//       let state = JSON.parse(localStorage.getItem(`${movieId}`))
//       this.setState({ ...state })
//     } else {
//       this.setState({ loading: true })
//       // First fetch the movie ...
//       let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
//       this.fetchItems(endpoint);
//     }
//   }

//   fetchItems = (endpoint) => {
//     // ES6 destructuring the props
//     const { movieId } = this.props.match.params;

//     fetch(endpoint)
//     .then(result => result.json())
//     .then(result => {

//       if (result.status_code) {
//         // If we don't find any movie
//         this.setState({ loading: false });
//       } else {
//         this.setState({ movie: result }, () => {
//           // ... then fetch actors in the setState callback function
//           let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
//           fetch(endpoint)
//           .then(result => result.json())
//           .then(result => {

//             const directors = result.crew.filter( (member) => member.job === "Director");

//             this.setState({
//               actors: result.cast,
//               directors,
//               loading: false
//             }, () => {
//               localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
//             })
//           })
//         })
//       }
//     })
//     .catch(error => console.error('Error:', error))
//   }