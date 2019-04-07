import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {loadApi} from '../store/actions/intialActions'
import Back from '../assets/compimages/Back.png'
import search from '../assets/compimages/search.png'
import './romcom.css';

class Romcom extends Component {

    state = {
        pageno: 1,
        results: []
    };

    componentDidMount() {
        this.props.loadApi(this.state.pageno)
    }

    render() {
        const { data, movies } = this.props;
        console.log('Data is', data);
        console.log('movies:',movies)
        return (
            <div>
                <nav className="flex items-center justify-between flex-wrap bg-cover-image p-6">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
                        <Link to={'/'}>
                            <img className="back-button" src={Back} alt="Back button" />
                        </Link>
                        <span className="font-semibold text-sm tracking-tight">{data.title}</span>
                    </div>
                    <div className="w-1/2 block flex-grow sm:flex sm:items-center sm:w-auto">
                        <form className="w-1/2 max-w-sm search">
                            <div className="flex items-center py-2">
                                <input
                                    className="search-bar appearance-none bg-transparent border-none w-1/2 text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text" placeholder="Search" aria-label="Search" />
                                        <img className="button" src={search} alt="Search button" />
                            </div>
                        </form>
                    </div>
                </nav>

                <div className="movie-list">
                    { movies &&  movies.map((pro, key) => {
                        return (
                            <div className="movie-cards">
                            <div className="sm:w-1/3 float-left movie-card" key={key}>
                                <div className="sm:flex md:flex">
                                    <img src={`http://www.aswinvarghese.com/images/Slices/${pro.posterImage}`} alt="movie poster"/>
                                </div>
                                <span className="movie-name">{pro.name}</span>
                            </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.load.data,
        movies: state.load.data.content
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadApi : (page) => dispatch(loadApi(page))
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (Romcom);
