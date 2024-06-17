import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import '../Styles/RegistroProducto.css';

const { Header, Content } = Layout;

const RegistroProducto: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header>
      </Header>
      <Content className="content">
        <Form
          form={form}
          name="registro-producto"
          onFinish={handleSubmit}
          className="registro-form"
        >
          <h2>Crear Publicación de Producto</h2>
          <Form.Item
            name="titulo"
            rules={[{ required: true, message: 'Por favor ingrese el título del producto' }]}
          >
            <Input placeholder="Título" />
          </Form.Item>
          <Form.Item
            name="descripcion"
            rules={[{ required: true, message: 'Por favor ingrese la descripción del producto' }]}
          >
            <Input.TextArea placeholder="Descripción" />
          </Form.Item>
          <Form.Item
            name="categoria"
            rules={[{ required: true, message: 'Por favor seleccione una categoría' }]}
          >
            <Input placeholder="Categoría" />
          </Form.Item>
          <Form.Item
            name="precio"
            rules={[{ required: true, message: 'Por favor ingrese el precio del producto' }]}
          >
            <Input placeholder="Precio" type="number" />
          </Form.Item>
          <Form.Item
            name="imagen"
            rules={[{ required: true, message: 'Por favor agregue una imagen' }]}
          >
            <Input placeholder="Agregar imagen" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Crear Publicación
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default RegistroProducto;
