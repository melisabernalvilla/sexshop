import React from 'react';


function ValidationData(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.ventas}</td>
                    <td>{props.calificacion}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ValidationData;