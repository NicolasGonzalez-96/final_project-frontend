import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";

export default function DetalleProducto () {

    const [detalle, setDetalle] = useState();
    const {productos, carro, setCarro} = useContext(MyContext)
    const parametro = useParams();
    const navigate = useNavigate();
    
    const getData = async() => {
      return setDetalle(productos.filter((i) => i.id === parametro.id));
    };

  const Click = (e) => {
    navigate("/catalogo")
  }

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

useEffect(() => {
  getData();
}, [])

    return (
      <>
      {detalle ? (
        <div className="detalle-producto">
            <div className="card m-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center">
                  <img
                    src={detalle[0].img}
                    className="img-fluid rounded"
                    alt={`Imagen de Pizza ${detalle[0].name}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {detalle[0].name[0].toUpperCase() + detalle[0].name.substring(1)}
                    </h5>
                    <hr />
                    <p className="card-text">{detalle[0].desc}</p>
                    <hr />
                    <div className="card-text d-flex justify-content-between">
                      <h3>Precio: ${detalle[0].price.toLocaleString()}</h3>
                      <div className="d-flex justify-content-end gap-3">
                      <button className="btn btn-success" onClick={Click}>Volver</button>
                      <button className="btn btn-danger" onClick={()=>addToCart(detalle[0])}> Añadir 🛒</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ) : null}
    </>
    )
}


