import React from 'react';


function ChartRow(props) {
    return (
        <>
            {
                props.type === 'product' &&
                <tr>
                    <td>{props.id}</td>
                    <td>{props.titulo}</td>
                    <td>{props.precio}</td>
                    <td>{props.descripcion}</td>
                    <img src={props.img}/>

                </tr>
            }

            {
                props.type === 'user' &&
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.apellido}</td>
                    <td>{props.email}</td>
                    <td>{props.id}</td>
                    <img src={props.img}/>
                </tr>
            }
        </>

    )

}



export default ChartRow;