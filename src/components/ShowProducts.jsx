import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import reactWithContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';

export const ShowProducts = () => {
  const url = 'http://api.products.run'
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [name, setNmae] = useState('');
  const [price, setPrice] = useState('');
  const [operacion, setOperacion] = useState(1);
  const [title, setTitle] = useState('');


useEffect(()=>{
  getProducts()
},[])

const getProducts = async ()=>{
  try{
    const response = await axios.get(url);
    setProducts(response.data);
    console.log(response.data);
  }
  catch(error){
    console.error(error);
  }

}



  return (
    <div className='App'>
      <div className='container-fluid'>
      <div className='row mt-3'>
          <div className='col-md-4 offset-4'>
            <div className='d-grid mx-auto'>
              <button 
              className='btn btn-dark'
              data-bs-toggle='modal'
              data-bs-target='modalProducts'>
                <i className='fa-solid fa-circle-plus'></i>
                Añadir
              </button></div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>#</th><th>Producto</th><th>Descripción</th><th>Precio</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                             { products.map( (product, i)=>(
                                <tr key={product.id}>
                                    <td>{(i+1)}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>$ { new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))

                            } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      <div className='modal fade'>
        
      </div>

    </div>
  )
}
