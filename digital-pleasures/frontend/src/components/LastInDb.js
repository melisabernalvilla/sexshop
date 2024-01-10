import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';


let content = {
  nombre: "Testing",
  description: "Testing",
  img: null
}


function LastInDb(props) {

  if (props != undefined) {
    let data = props.content.return

    console.log(data)

    if (props.type == 'user') {
      content = {
        nombre: `Datos de: ${data.nombre} ${data.apellido}`,
        description: data.email,
        img: data.img
      }
      console.log(content.img)
    }

    if (props.type == 'product') {
      content = {
        img: data.img,
        nombre: `Mostrando: ${data.titulo}`,
        description: data.descripcion
      }
      console.log(content.img)
    }
  }



  return (
    <Card style={{ width: '15rem', height: '18rem' }}>
      <Card.Body>
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={content.img} />
        <Card.Title>{content.nombre}</Card.Title>
        <Card.Text>{content.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}


export default LastInDb;
