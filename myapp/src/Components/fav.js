import { Component } from "react";
import Product  from "./Product";
import Zerostate from "./Zerostate";
class Fav extends Component
{
    state={
      
    };
 



    render(){
        console.log(this.props)
        const {fav , remove}=this.props
     return(
        <div>
{
    this.props.fav.length ? this.props.fav.map((item)=>
    (
        <div key={item.id}>
            {item.id}- {item.title}<button onClick={()=>remove(item.id)}>remove from fav</button>
        </div>
    ))
    : <Zerostate/>
    
    }
    </div>
     );
    }
}
export default Fav;