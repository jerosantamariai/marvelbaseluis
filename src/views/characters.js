import React, { useContext } from 'react';
import { Context } from './../store/appContext';

const Characters = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        !!store.characters &&
                            store.characters.results.length > 0 ?
                            store.characters.results.map((character, i) => {
                                return (
                                    <div className="col-md-6" key={i}>
                                        <div className="card mb-3">
                                            <div className="row no-gutters">
                                                <div className="col-md-5">
                                                    <img src={character.thumbnail.path + "." + character.thumbnail.extension} className="card-img" alt="..." />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{character.name}</h5>
                                                        <p className="card-text">{character.description}</p>
                                                        <p className="card-text">
                                                            <small className="text-muted">Read more</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) :
                            (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between">
                        {
                            !!store.characters &&
                                store.characters.offset > 0 ?
                                (
                                    <button className="btn btn-primary btn-md"
                                        onClick={() => actions.getCharacters('/v1/public/characters', (store.characters.offset - store.characters.limit), store.characters.limit)}>
                                        Previous
                                    </button>
                                ) : (
                                    <span className="btn btn-primary btn-md disabled">
                                        Previous
                                    </span>
                                )
                        }
                        {

                            !!store.characters && (
                                <span className="text-danger">
                                    <b>
                                        {
                                            store.characters.total
                                        }
                                    </b>
                                </span>
                            )
                        }
                        {
                            !!store.characters &&

                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getCharacters('/v1/public/characters', (store.characters.offset + store.characters.limit), store.characters.limit)}>
                                    Next
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Characters;