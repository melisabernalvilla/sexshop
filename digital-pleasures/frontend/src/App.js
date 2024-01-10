import React from 'react';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Users from './components/pages/Users';
import DpNav from './components/DpNav';
import Footer from './components/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { useState, useEffect } from 'react';


function App() {


    let [products, setProducts] = useState([])
    let [users, setUsers] = useState([])

    useEffect(() => {


        async function fetchData(url) {

            try {

                let response = await fetch(url);

                let data = await response.json();
                console.log('DATA:' + data);
                return data

            } catch (error) {
                console.log(error);
            }

        }
        async function populateData() {
            const [users, products] = await Promise.all([fetchData('/api/users'), fetchData('/api/products')])
            setUsers(users)
            setProducts(products)
        }

        populateData()

    }, []);

    
    return (

        <React.Fragment>
            <DpNav />
            <Route path="/" exact component={() => <Home users={users} products={products} />} />
            <Route path="/products" exact component={() => <Products products={products} />} />
            <Route path="/users" exact component={() => <Users users={users} />} />
            <Footer />
        </React.Fragment>
    );
}

export default App;
