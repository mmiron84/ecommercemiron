import React, { useEffect, useState } from 'react';
import '../IntemListContainer/ItemListContainer.css';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from "../../services/config"
import { collection, getDocs,query,where } from 'firebase/firestore';
import Loader from '../Loader/Loader';



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally(()=>{
        setLoading(false)
      })
  }, [idCategoria]);

  return (
    <div className="productos">
      <h2>Mis Productos</h2>
      {loading ? <Loader/>:<ItemList productos={productos} />}
      
    </div>
  );
};

export default ItemListContainer;
