import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';



export default function Login() {

    const inicioSesion = () => {
        alert("Sesión iniciada con éxito!")
    }
    return (

    <Form className='formulario'>

       <div className='containerformulario'>
            <h2 className='titulo-formulario'>Bienvenido!</h2>
            <p>Favor ingresar datos para entrar al sitio:</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" className='px-5' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" className='px-5'/>
        </Form.Group>
        <Button variant="success" type="submit" onClick={inicioSesion}>
            Ingresar
        </Button>
        <p>¿Olvidaste tu contraseña? <NavLink to="/registrousuario">Registrate</NavLink></p>
        </div>
    </Form>

    
    )
}

