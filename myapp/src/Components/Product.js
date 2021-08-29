import { Component } from "react"

function Product({singleitem,deleteItem, addtofav, additemcart,edititem}) {
const {id , title , price} = singleitem
    return(
        <div>
        {id} - {title} -{price}
        <button onClick={() => deleteItem(id)}> <i className="fa fa-trash"/></button>
        <button onClick={()=> addtofav(singleitem)}> <i className="fa fa-star"/> </button>
        <button onClick={()=> additemcart(singleitem)}> <i className="fa fa-shopping-cart"/> </button>
        <button onClick={()=> edititem(id)}> <i className="fa fa-pen"/> </button>
        </div>
    )
    
}
export default Product;