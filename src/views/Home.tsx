import React, { useContext } from 'react';
import { Layout, Carousel, Menu, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../Styles/Home.css';

const { Content, Sider } = Layout;
const { Meta } = Card;

const categories = [
  { key: 'cat1', name: 'Categoría 1' },
  { key: 'cat2', name: 'Categoría 2' },
  { key: 'cat3', name: 'Categoría 3' },
  { key: 'cat4', name: 'Categoría 4' }
];

export default function Home() {
  const { productos } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="home">
      <Layout >
        <Sider width={200} className="site-layout-background">
          <Menu 
            mode="inline"
            defaultSelectedKeys={['cat1']}
            style={{ height: '100%', borderRight: 0, backgroundColor: '#212121' }}>
            {categories.map(category => (
              <Menu.Item key={category.key}>{category.name}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', backgroundColor: '#3c3c3c'}}>
          <Carousel autoplay className="carousel">
            {productos.map(producto => (
              <div key={producto.id} className="carousel-item">
                <Card
                  hoverable
                  cover={<img alt={producto.name} src={producto.img} />}
                  className="carousel-card"
                >
                  <Meta title={producto.name} description={`$${producto.price}`} />
                  <Button 
                    type="primary"
                    onClick={() => navigate(`/producto/${producto.id}`)}
                    style={{ marginTop: '10px' }}>
                    Ver más
                  </Button>
                </Card>
              </div>
            ))}
          </Carousel>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">Contenido principal</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
