import MyContext from '../MyContext';
import { useContext, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Input } from 'antd';




export default function Catalogo() {

    const {productos, setProductos, carro, setCarro} = useContext(MyContext)

    const navigate = useNavigate();

    const addToCart = ({ id, price, name, img }) => {
      const productoIndex = carro.findIndex((p) => p.id === id);
      const producto = { id, price, name, img, count: 1 };
  
      if (productoIndex >= 0) {
        carro[productoIndex].count++;
        setCarro([...carro]);
      } else {
        setCarro([...carro, producto]);
      }
    };
  
      return (
      <>
      <div className='container-cards'>
        <Input className='input-catalogo' placeholder="Buscar"/>;
        <div className="cards"> 
        {productos.map((producto) => (
          <div key={producto.id}>
        <Card style={{ width: '18rem'}}> 
          <div className='card-component'>
          <Card.Img variant="top" src={producto.img}/>
          <div className="divisor-cards"></div>
          <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
            </Card.Body>
            <div className="divisor-cards"></div>
              <h5>${(producto.price).toLocaleString()}</h5>  
          <Card.Body className="botones">
          <Button variant="primary" to ={`producto/${producto.id}`} onClick={() => navigate(`/producto/${producto.id}`)}>Ver más 👀</Button>
          <Button variant="danger" onClick={() => addToCart(producto)} > Añadir 🛒</Button>
          </Card.Body>  
          </div> 
        </Card>
        </div>
          ))}
        </div>  
        </div> 
        </>   
    )
    
}





