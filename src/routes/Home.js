import React from 'react';  
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
    state = {
        isLoading: true,
        movies : []
    };
    getMovies = async() => { //asybc await(비동기), 함수 기다림
        const {data: {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //axios는 좀 느리다.
        this.setState({movies, isLoading: false}); //state 상태 변환
    };
    componentDidMount(){
        this.getMovies();
    }
    render(){
        const {isLoading, movies} = this.state;  //state로 부터 movie 가져오기 
        return (
            <section className = "container">
            {isLoading ? (
              <div className="Loader">
                <span className="loader__text">Loading...</span>
            </div>
            ): (
             <div className="movies">  
                {movies.map(movie =>(
                <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres ={movie.genres}
                />
                ))}   
             </div>
            )}
            </section>
        );
    }
 
}

export default Home; 