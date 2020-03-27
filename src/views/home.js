import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import md5 from 'md5';

const Home = props => {
    const { store } = useContext(Context);
    return (
        <>
            <h1>Home</h1>
            {md5(store.ts+store.privateKey+store.publicKey)}
        </>
    )
}

export default Home;