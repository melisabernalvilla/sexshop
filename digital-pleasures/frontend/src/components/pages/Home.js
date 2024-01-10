import React from 'react';
import Card from '../Card';
import LastInDb from '../LastInDb';

function Home(props) {

  

    return (
        <div id='content'>
            <div className='homeBase'>


                <Card
                    type='user'
                />

                <Card
                    type='product'
                />
            </div>


            {props?.users?.count > 0  && props?.products?.count > 0 ?
                <div className="row holder">
                    <LastInDb
                        type='user'
                        content={props.users.users[props.users.count - 1]} />
                    <LastInDb
                        type='product'
                        content={props.products.productos[props.products.count - 1]} />
                </div>
                :
                <p> Cargando...</p>
            }

        </div>
    )
}
export default Home;