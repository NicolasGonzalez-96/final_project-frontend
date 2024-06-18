import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import '../Styles/PerfilUsuario.css';

const { Content } = Layout;

const PerfilUsuario: React.FC = () => {
  return (
    <Layout className='layout'>
      <Content className="perfil-content">
        <div className="perfil-container">
          <h2>Mi Perfil</h2>
          <div className="perfil-avatar">
            <div className="avatar-placeholder">Foto</div>
            <div className="perfil-nombre">Nombre Usuario</div>
          </div>
          <Form layout="vertical" className="perfil-form">
            <Form.Item label="Email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Dirección">
              <Input placeholder="Dirección" />
            </Form.Item>
            <Form.Item label="Cambiar Password">
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Guardar Cambios</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default PerfilUsuario;
