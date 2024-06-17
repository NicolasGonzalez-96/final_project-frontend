import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import '../Styles/RegistroUsuario.css';

const { Content } = Layout;

const Registro: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Layout>
      <Content className="content">
        <Form name="registro" className="register-form" onFinish={onFinish}>
          <h3>Bienvenido!</h3>
          <p>Favor ingresar datos para crear tu cuenta</p>
          <Form.Item name="email" rules={[{ required: true, message: 'Por favor ingresa tu email!' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}>
            <Input type="password" placeholder="Contraseña" />
          </Form.Item>
          <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Por favor confirma tu contraseña!' }]}>
            <Input type="password" placeholder="Confirmar Contraseña" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Crear Cuenta
            </Button>
            <p>¿Ya tienes cuenta? <NavLink to="/login">Inicia sesión</NavLink></p>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default Registro;
