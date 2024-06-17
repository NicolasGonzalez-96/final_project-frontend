import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import MyContext from '../context/MyContext';
import { useContext } from 'react';
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import '../Styles/Navbar.css'


export default function NavbarComponent() {

  const { carro } = useContext(MyContext)

  const total = carro.reduce((a, { count }) => a + count, 0);

    return (

    
    <Navbar expand="lg" className="containernavbar">
      <Container fluid className='mx-5 text-white'>
      <div className='containernavbar1'>
      <NavLink to="/home">
        <img src="/logo.ico" alt="" />
      </NavLink>  
      <Form className="d-flex buscador">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2 px-4"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </div>
        <div className='containernavbar2'>
            <NavLink to="/home" className='textdecoration'>Inicio</NavLink>
            <NavLink to="/catalogo" className='textdecoration'>Catálogo</NavLink>
            <NavLink to="/perfiltienda" className='textdecoration'>Tiendas</NavLink>
            <NavLink to="#action2" className='textdecoration'>Categorías</NavLink>
            <NavDropdown title="Perfil" className='navdropdown'>
              <NavLink to="/login" className='textdecoration2'>Iniciar Sesión</NavLink>
              <div></div>
              <NavLink to="/registrousuario" className='textdecoration2'>Registrarse</NavLink>
            </NavDropdown>
          
            
              <Space size="middle">
                <Badge count={(total).toLocaleString()}>
                  <NavLink to="/carro" className='textdecoration'><MdOutlineShoppingCart className='icono-carro' /></NavLink> 
                </Badge>
              </Space>
          </div>
  
   
      </Container>
    </Navbar>


   )
}