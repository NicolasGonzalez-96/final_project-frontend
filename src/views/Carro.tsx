import { useContext } from "react"
import MyContext from "../context/MyContext"
import { useNavigate } from "react-router-dom"
import '../Styles/Carro.css'


export default function Carro() {
  
  <form action="">
    <input type="text" />
    </form>

    const {carro, setCarro} = useContext(MyContext)
    const total = carro.reduce((a, { count, price }) => a + price * count, 0);

    const increment = (i) => {
        carro[i].count++;
        setCarro([...carro]);
      };
      const decrement = (i) => {
        const { count } = carro[i];
        if (count === 1) {
          carro.splice(i, 1);
        } else {
          carro[i].count--;
        }
        setCarro([...carro]);
      };

      const borrarCarro=()=>{
        setCarro([]);
        setTotal(0)
      }


     const compra = () => {
        alert("Compra realizada con éxito")
     } 
    
     const navigate = useNavigate();

      const Click = (e) => {
        navigate("/catalogo")
      }

    return (


    <div className="d-flex justify-content-center carro">
          <div className="m-3 border p-4" style={{ width: "80vw" }}>
            <div>Detalles del Pedido:</div>
            {carro.map((producto, i) => (
                    <div key={i} className="d-flex justify-content-between w-100">
                      <div className="d-flex gap-2 justify-content-start align-items-center">
                        <img src={producto.img} alt="" style={{ width: "50px" }} />
                        <p className="m-0">
                          {" "}
                          {producto.name[0].toUpperCase() + producto.name.substring(1)}
                        </p>
                      </div>
                      <table className="d-flex">
                        <tbody>
                          <tr className="d-flex align-items-center">
                            <td>
                              {" "}
                              <p className="text-success m-0">${(producto.price*producto.count).toLocaleString()}</p>
                            </td>
                            <td>
                              <button className="btn btn-danger m-2" onClick={() => decrement(i)}>-</button>
                            </td>
                            <td key={producto.id}>
                            <b className="mx-2">{producto.count}</b>
                            </td>
                            <td>
                              <button  className="btn btn-primary" onClick={() => increment(i)}>+</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                 ))}
                    
                  <h2 className="my-4 d-flex justify-content-end">Total: ${(total).toLocaleString()}</h2>
                  <div className="d-flex justify-content-end gap-3">
                  <button className="btn btn-success" onClick={compra}>Ir a Pagar</button>
                  <button className="btn btn-danger" onClick={borrarCarro}>Vaciar</button>
                  <button className="btn btn-secondary" onClick={Click}>Volver</button>

                  </div>
             </div>
        </div>
    )}
