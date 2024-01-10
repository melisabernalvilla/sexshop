import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';



function Card(props) {

    let [products, setProducts] = useState({})
    let [users, setUsers] = useState({})



    //                          FETCHEO Users

    useEffect(() => {

        (

            async function () {

                try {

                    let response = await fetch('/api/users');

                    let data = await response.json();

                    setUsers(data)

                } catch (error) {

                    console.log(error);

                }

            }

        )()

    }, []);

    //                          FETCHEO PRODUCTS

    useEffect(() => {

        (

            async function () {

                try {

                    let response = await fetch('/api/products');

                    let data = await response.json();

                    setProducts(data)

                } catch (error) {

                    console.log(error);

                }

            }

        )()

    }, []);


    //



    let cardComponents = {
        title: 'any',
        color: 'alert',
        cuantity: '-10000',
        icon: "fas fa-question"
    }

    if (props.type == 'product') {
        cardComponents = {
            title: 'Products',
            color: 'success',
            cuantity: products.count,
            icon: 'fa-solid fa-star'
        }
    }

    if (props.type == 'user') {
        cardComponents = {
            title: 'Users in Data Base',
            color: 'primary',
            cuantity: users.count,
            icon: 'fa-solid fa-user'
        }
    }

    if (props.type == 'categories') {
        cardComponents = {
            title: 'Categories in Data Base',
            color: 'warning',
            cuantity: 5,
            icon: 'fa-solid fa-cash-register'
        }
    }



    return (

        <div className="row">

            <SmallCard {...cardComponents} />

        </div>
    )
}

export default Card;