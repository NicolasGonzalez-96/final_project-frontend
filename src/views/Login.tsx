import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import '../Styles/Login.css';

const { Content } = Layout;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Layout>
      <Content className="content">
        <Form name="login" className="login-form" onFinish={onFinish}>
          <h3>Bienvenido!</h3>
          <p>Favor ingresar datos para entrar al sitio</p>
          <Form.Item name="email" rules={[{ required: true, message: 'Por favor ingresa tu email!' }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}>
            <Input type="password" placeholder="Contraseña" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar Sesión
            </Button>
            <p>¿No tienes cuenta? <NavLink to="/registrousuario">Registrate</NavLink></p>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default Login;
