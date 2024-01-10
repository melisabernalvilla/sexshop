import React, { useState } from 'react';
import Card from '../Card';
import Chart from '../Chart';
import LastInDb from '../LastInDb';
import GenresInDb from '../GenresInDb';



function Products(props) {
    const [filteredProducts, setFilteredProducts] = useState()
    const onFilter = (products) => setFilteredProducts(products)
    console.log(filteredProducts);
    return (


        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <br />
                <div id="content">
                    <div id='content'>
                        <div className='homeBase'>

                            <Card
                                type='product'
                            />
                            <Card
                                type='categories'
                            />
                        </div>
                    </div>


                    {props?.products?.count > 0 ?
                        <>
                            <div className="row holder">
                                <LastInDb
                                    type='product'
                                    content={props.products.productos[props.products.count - 1]} />
                                <GenresInDb onFilter={onFilter}  />
                            </div>
                            <Chart
                                type='product'
                                content={filteredProducts || props.products.productos}

                            />
                        </>
                        : <p> Cargando... </p>}
                </div>
            </div>
        </React.Fragment>

    )
}
export default Products;