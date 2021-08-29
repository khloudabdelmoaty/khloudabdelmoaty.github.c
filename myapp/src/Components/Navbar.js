import React , {Component  } from 'react';

import { NavLink} from "react-router-dom"

function Navbar() {
return(
<div>
  <ul>
  <li>
      <NavLink to="/"> Home</NavLink>
    </li>
    <li>
      <NavLink to="/Create"> create</NavLink>
    </li>
    <li>
      <NavLink to="/Products"> products</NavLink>
    </li>
    <li>
      <NavLink to="/Fav"> Fav</NavLink>
    </li>
    <li>
      <NavLink to="/Cart"> Cart</NavLink>
    </li>
    {/* <li>
      <NavLink to="/Editproduct"> Editproduct</NavLink>
    </li> */}
    
  </ul>

</div>

  
)
}
 
export default Navbar;