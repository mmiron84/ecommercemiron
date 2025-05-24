// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FULMEN_APIKEY,
  authDomain: "ecommerce-miron.firebaseapp.com",
  projectId: "ecommerce-miron",
  storageBucket: "ecommerce-miron.firebasestorage.app",
  messagingSenderId: "856267701550",
  appId: "1:856267701550:web:8e0935dd07adef0df2cebf",
  measurementId: "G-FX37PBZ50N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)


//////////////////////////////////////////////////////////
//fUNCNION PARA CARGAR LOS PRODUCTOS EN FIREBASE
/*
const misProductos =[
    {id:"1", nombre:"Bloque de Agua", stock:10, precio:400, img:"/img/bloqueagua.jpg",idCat:"original"},
    {id:"2", nombre:"Alma Soprano Ice", precio:15000,stock:5, img:"/img/almaIce.png",idCat:"original"},
    {id:"3", nombre:"Peltier", precio:500,stock:9, img:"/img/peltier1.jpg",idCat:"noOriginal"},
    {id:"4", nombre:"Tapas Laterales s",stock:7, precio:400, img:"/img/tapas.jpg",idCat:"noOriginal"},
    {id:"5", nombre:"Alma Soprano Titanium",stock:7, precio:25000, img:"/img/almaTitanium.png",idCat:"original"},
    {id:"6", nombre:"Tapas Laterales Adss",stock:7, precio:400, img:"/img/carcasaAdss.png",idCat:"noOriginal"},
    {id:"7", nombre:"Cabezal Completo",stock:7, precio:23000, img:"/img/cabezal.jpg",idCat:"original"}
    
]

import { collection,doc,writeBatch } from "firebase/firestore";

const subirProductos = async () =>{
  const batch = writeBatch(db);
  const productosRef = collection(db, "productos");


misProductos.forEach((producto)=>{
  const nuevoDoc = doc(productosRef);
  batch.set(nuevoDoc,producto);
});

try {
  await batch.commit();
  console.log("producto subido exitosamente");
} catch (error) {
  console.log("no se pudo subir el productos",error)
}
};
subirProductos();
*/