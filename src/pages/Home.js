import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';




class Home extends Component {

    constructor(props){
        super(props);

        this.state= {

        };
    }

    render() {
        return (
            <div className="App-container">
                <div className="container">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">AV MOVIES-APP</h1>
                            <p className="header-text">Whether you are a Movie lover,
                                a critic, or simply curious about movies,
                                we invite you to search and explore the different genre of movies in the collection.</p><br/>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className='align-middle text-light'>Search by Genre</h3>
                        <Slide bottom>
                            <div className="col-sm-6 pt-4 pb-4">
                                <Link to={'/romcom'}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Rom-Com</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="col-sm-6">
                                <Link to={'/#'}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Thrillers</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
