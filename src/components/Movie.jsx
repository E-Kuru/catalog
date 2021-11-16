import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import films from '../movies.json'

export class Movie extends Component {

    render() {

        const {id} = this.props.match.params

        // const filteredMovie = films.filter( movie => movie.id === Number(id))
        const movie = films.find( movie => movie.id === Number(id))

        return (
            <>
            {movie ? 
                
                <div style={{marginLeft : '2%',width : '60%', textAlign : 'start'}}>
                    <h1>{movie.title}</h1>
                    <h3>{movie.director}</h3>
                        <h5>Actors :</h5>
                    <ul>
                        <li>{movie.stars[0]}</li>
                        <li>{movie.stars[1]}</li>
                        <li>{movie.stars[2]}</li>
                    </ul>
                    <figcaption>{movie.description}</figcaption>
                    <img src={movie.image} alt={`image de ${movie.title}`} style={{width : 'auto',marginTop : '2%'}} />
                    <br />
                    <Link to='/'><button>Home page</button></Link>
                </div>
            :
            
                <>
                    <h1>Error 404 Page does not exist</h1>
                    <Link to='/'><button>Home page</button></Link>
                </>
            }
    </>
            // <div>
            //     {filteredMovie.length > 0 ? 

            //         filteredMovie.map( e => (
            //             <div key={e.id + e.title} style={{marginLeft : '2%',width : '60%', textAlign : 'start'}}>
            //                 <h1>{e.title}</h1>
            //                 <h3>{e.director}</h3>
            //                     <h5>Actors :</h5>
            //                 <ul>
            //                     <li>{e.stars[0]}</li>
            //                     <li>{e.stars[1]}</li>
            //                     <li>{e.stars[2]}</li>
            //                 </ul>
            //                 <figcaption>{e.description}</figcaption>
            //                 <img src={e.image} alt={`image de ${e.title}`} style={{width : 'auto',marginTop : '2%'}} />
            //                 <br />
            //                 <Link to='/'><button>Home page</button></Link>
            //             </div>
            //         ))
            //     :
            //     <>
            //      <h1>Error 404 Page does not exist</h1>
            //      <Link to='/'><button>Home page</button></Link>
            //     </>
            //     }
            // </div>
        )
    }
}

export default Movie
