import React , {Component } from 'react';
import {BrowserRouter as Router, Route , Switch, Redirect} from "react-router-dom"
import Data from './Data';
import Navbar from './Components/Navbar';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import { faSearch , faTrash} from '@fortawesome/free-solid-svg-icons'
import HOME from './Components/Home';
import Products from './Components/Products';
import Creatproduct from './Components/Create';
import Fav from './Components/fav';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Zerostate from './Components/Zerostate';
//import "./style.scss"
import routes from "./routes"
let allItems = localStorage.getItem("Data")? JSON.parse(localStorage.getItem("Data")): Data;
localStorage.setItem("Data",JSON.stringify(allItems));
library.add(fab, faTrash)

class Myapp extends Component
{
  state={
    
  products :allItems,
  fav:[],
  newtitle:" ", 
  nweprice:"", 
  redirect:false,
  CartItem :[],
  editredirect:false,
  }


  handelchangeinput = (e) =>
  {
this.setState(
  {
    [e.target.id] :e.target.value
  }
) }

additem =(e)=>
{
  e.preventDefault()
this.setState(
  {
    products: [...this.state.products , {
      id : this.state.products.length + 1, 
      title : this.state.newtitle, 
      price:this.state.newprice,
    }],
    newtitle:"", 

    newprice :" ",

  }, 

  () =>
  {
    localStorage.setItem("Data",JSON.stringify(this.state.products));

    this.setState({  redirect: true});
  }
)

}

deleteItem =(id)=>{
  let products =[...this.state.products];
  let newproducts =products.filter((product )=> product.id !== id);
  this.setState({
    products: newproducts,
  },()=>{
   localStorage.setItem("Data",JSON.stringify(this.state.products));
  })
}
    addtofav =(item)=>
    {
      let {fav} = this.state
       if(!fav.some((existeditem)=> existeditem.id == item.id)){
        this.setState({fav:[...this.state.fav, item]})
      }
      }
removefromfav=(id)=>{
let fav =[...this.state.fav];
let newitems = fav.filter((item)=> item.id != id);
this.setState(
  {
fav : newitems
  }
)

}



additemcart=(prd) =>{
   let existeditem= this.state.CartItem.find((i) =>i.id == prd.id);

   if(existeditem){
     let CartItem = this.state.CartItem.map((item) => item.id == prd.id ? 
     {...existeditem,qty:existeditem.qty + 1 , total:Number(existeditem.price * existeditem.qty+1) }
     :item);
    this.setState({CartItem}) 
   }else{
    this.setState({CartItem :[...this.state.CartItem, {...prd, qty:1, total:+prd.price * 1}]})
   }
 
}
removeitemcart=(prd)=>
{
  let existeditem= this.state.CartItem.find((i) =>i.id == prd.id);
  if (existeditem.qty == 1){
    let CartItem = this.state.CartItem.filter((x) => x.id != prd.id);
    this.setState({CartItem}) 
  }else{
    let CartItem = this.state.CartItem.map((item) => item.id == prd.id ? 
    {...existeditem,qty:existeditem.qty -1}
    :item);
   this.setState({CartItem}) 
  }
}

Checkout =()=>
  {

alert("ii")

  }
edititem =(id)=>
{
  localStorage.setItem("product id" , id)
  this.setState({editredirect:true})
}

Saveupdatadata=(e , updataprice ,updatatitle)=>
{
    e.preventDefault()
    let productid = localStorage.getItem("product id");
    let getdata = JSON.parse(localStorage.getItem("data"))
    const  Data = getdata.find(
        (item)=> item.id == productid
    );
    Data.title=updatatitle ? updatatitle : Data.title;
    Data.price=updataprice ? updataprice:Data.price;
    this.setState({products :getdata , redirect:true})
    localStorage.setItem("data", JSON.stringify(getdata))
    alert("jhh")
}



  render(){
    
    return(


<Router>
<Navbar/>

{this.state.redirect && <Redirect to="/Products"/>}

{this.state.editredirect && <Redirect to="/Editproduct"/>}

   {/* <Route path="/" exact component={HOME}/>

   <Route path="/Checkout" render={(props) => {
     return(
     < Checkout Checkout={this.Checkout}
     
     {...props} />
     )
   }} />

   
   <Route path="/Create" render={(props) => {
     return(
     < Creatproduct handelchangeinput ={this.handelchangeinput} additem ={this.additem} 
     newtitle={this.state.newtitle}
     newprice={this.state.newprice}
     {...props} />
     )
   }} />
   
   <Route path="/Products" render={(props) => {
     return(
     < Products Items={this.state.products}{...props} 
     deleteItem ={this.deleteItem}
      addtofav={this.addtofav}
     additemcart={this.additemcart}
     edititem={this.edititem}
     />
     
     )

   }} />

<Route path="/Fav" render={(props) => {
     return(
     < Fav {...props} fav={this.state.fav} remove={this.removefromfav}/>
     )

   }} />
<Route path="/Cart" render={(props) => {
     return(
     < Cart CartItem={this.state.CartItem}  
     additemcart={this.additemcart} 
      removeitemcart ={this.removeitemcart}
      {...props} />
     )

   }} /> */
   
   routes.map((route)=> 
   (<Route path={route.path} 
     exact={route.exact} 
    component={route.component}
    render={(props) =>
      route.render(this, props)
    }
    />))
   
   }

</Router>        

    
    )
  }
}
export default Myapp;