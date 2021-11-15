import React, { Component } from 'react'

import'./styles/movies.css'

import films from '../movies.json'

import { Link } from 'react-router-dom'

export class Movies extends Component {
    render() {
        return (
            <div>
                <h1>All Movies</h1>
                {films.map( e  => (
                    <div key={`${e.title + e.id}`}>
                        <Link to={`/movie/${e.id}`}><p>{e.title}</p></Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Movies
