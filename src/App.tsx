import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importación de views
import Home from './views/Home'
import Login from './views/Login'
import RegistroUsuario from './views/RegistroUsuario'
import Carro from './views/Carro'
import Catalogo from './views/Catalogo'
import Producto from './views/Producto'
import PerfilUsuario from './views/PerfilUsuario'
import PerfilTienda from './views/PerfilTienda'
import RegistroProducto from './views/RegistroProducto'
import DetalleProducto from './views/DetalleProducto'

// Importación de componentes
import NavbarComponent from './components/Navbar'
import FooterComponent from './components/Footer'

// Importación de MyContext
import MyContext from './context/MyContext'

function App() {

  const [productos, setProductos] = useState([])
  const [carro, setCarro] = useState([])
  const [total, setTotal] = useState(0)
 
  const sharedData = {productos, carro, setCarro, total, setTotal};

  const endpoint = "producto.json"
  const getData = async() => {
    const res = await fetch(endpoint)
    const producto = await res.json();
    // setProducto(producto)
    setProductos(producto)
    console.log(producto)
  }

  useEffect(()=> {
    getData();
   }, []);
  
    return (
      <>
        <div>
         
        <MyContext.Provider value={sharedData}>

        <BrowserRouter>
        
        <NavbarComponent/>
        
            <Routes>
                <Route path= '/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path="producto/">
                  <Route path=":id" element={<DetalleProducto />} />
                </Route>
                <Route path='/registrousuario' element={<RegistroUsuario />} />
                <Route path='/carro' element={<Carro />} />
                <Route path='/catalogo' element={<Catalogo />} />
                <Route path='/producto' element={<Producto />} />
                <Route path='/perfilusuario' element={<PerfilUsuario />} />
                <Route path='/perfiltienda' element={<PerfilTienda />} />
                <Route path='/registroproducto' element={<RegistroProducto />} />
            </Routes>
        </BrowserRouter>

        <FooterComponent/>
        
        </MyContext.Provider>

        </div>
      </>
    )
  }
  
  export default App