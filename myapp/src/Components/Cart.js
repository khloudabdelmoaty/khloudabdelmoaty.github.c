import React , {Component  } from 'react';
import Checkout from './Checkout';
import Zerostate from './Zerostate';

import { NavLink} from "react-router-dom"




function Cart({CartItem , additemcart , removeitemcart}) {
console.log(CartItem)
let total = CartItem.reduce((a, c ) => a + c.price * c.qty , 0)
return <div>
   {CartItem.length ? `items count ${CartItem.length} ` : ""}

    {CartItem.length ? CartItem.map((item) =>(
        
        <div key={item.id}>
            {item.title} {item.qty} *{item.price}
            <button onClick={() => additemcart(item)}> +</button>
            <button onClick={() => removeitemcart(item)}> -</button>
        </div>
    ))
:<Zerostate/>}
total price : {total}
<br></br>
<button>

      <NavLink to="/Checkout"> Checkout</NavLink>
    
</button>
</div>
    


  

}
 
export default Cart;