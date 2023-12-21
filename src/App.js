import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Products } from './Products';
import Shoop from "./Shoop.jfif"
function App() {
  return (
    <div >
      
      <h2>This is Backery Shop</h2>
      <h3> We sell the tasty pastries</h3>
      <img src={Shoop}/>
      <div style={{display:"flex"}}>

      {Products.map((product)=>(
        <>
       <h1>{product.name}</h1>
        <h3>{product.price}KD</h3>
        <img src={product.image}width="100px"/>
       </>
      ))
    }
    </div>
    </div>
  );
}

export default App;
