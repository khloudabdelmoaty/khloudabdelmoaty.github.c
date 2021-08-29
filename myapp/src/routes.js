import HOME from "./Components/Home";
import Checkout from './Components/Checkout';
import Creatproduct from './Components/Create';
import Products from './Components/Products';

import Fav from './Components/fav';
import Cart from './Components/Cart';
import Editproduct from './Components/Editproduct';
export default [

{
     path:"/" , component:HOME , exact:"exact"
}
,



{
    path:"/Checkout", render:(self,props) => {
        return(
        < Checkout Checkout={self.Checkout}
        
        {...props} />
        )
      }
},

{


    path:"/Create" ,render:(self,props) => {
        return(
        < Creatproduct handelchangeinput ={self.handelchangeinput} additem ={self.additem} 
        newtitle={self.state.newtitle}
        newprice={self.state.newprice}
        {...props} />
        )
    }
}
,
{
     path:"/Products" ,render:(self ,props) => {
        return(
        < Products Items={self.state.products}{...props} 
        deleteItem ={self.deleteItem}
         addtofav={self.addtofav}
        additemcart={self.additemcart}
        edititem={self.edititem}
        />
        
        )
   
      }
},
{
    path:"/Fav" ,render:( self,props) => {
        return(
        < Fav {...props} fav={self.state.fav} remove={self.removefromfav}/>
        )
   
      }
},
{
     path:"/Cart", render:( self,props) => {
        return(
        < Cart CartItem={self.state.CartItem}  
        additemcart={self.additemcart} 
         removeitemcart ={self.removeitemcart}
         {...props} />
        )
   
      }
}
,

{
    path:"/Editproduct", render:( self,props) => {
       return(
       < Editproduct  
     
        {...props}  Saveupdatadata={self.Saveupdatadata}/>
       )
  
     }
}


















]