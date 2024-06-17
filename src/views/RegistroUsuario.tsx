import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

export default function RegistroUsuario() {

    const crearUsuario = () => {
        alert("Usuario creado con éxito!")
    }

    return (  

    <Form className='formulario'>

       <div className='containerformulario'>
       <h2 className='titulo-formulario'>Bienvenido!</h2>
       <p>Favor ingresar datos para crear tu cuenta: </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       
            <Form.Control type="email" placeholder="Email" className='px-5'/>
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" className='px-5' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirmar Contraseña" className='px-5' />
        </Form.Group>
        <Button variant="success" type="submit" onClick={(crearUsuario)}>
            Crear Cuenta
        </Button>
        <p>¿Ya tienes tu cuenta? <NavLink to="/login">Inicia Sesión</NavLink></p>
        </div> 
    </Form>

    )
}

