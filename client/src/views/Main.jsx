import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// import axios from 'axios';

const Main = () => {
    // STATE
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // useEffect
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    // MAIN PAGE
    return (
        <div className="container text-center">
            <div>
                <ProductForm />
                <hr />
                <h1>All Products:</h1>
                {loaded && <ProductList products={products}/> }
            </div>
        </div>
    )
}

export default Main;

    // all this below goes in the default function..
    // //message is the variable that represents the state. setMessage is a function allowing us to change the state.
    // const [message, setMessage] = useState("Loading...");
    // // execute logic as soon as component is rendered
    // useEffect(() => {
    //     //using axios to make a request to the backend.
    //     axios.get('http://localhost:8000/api')
    //         .then(res => {
    //             // response back from the backend. setMessage is what we use to change the state.
    //             setMessage(res.data.message)
    //         })
    //         .catch(err => console.error(err))
    // }, []); 
    //below was in the return parentheses
    //     <div>
    //     <h2>Message from the backend: {message}</h2>
    //     </div>