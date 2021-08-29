import { Component } from "react";
import Product  from "./Product";
class Products extends Component
{
    state={
        serchterm:" ",
        newfilteritem :this.props.Items
    };
    static getDerivedStateFromProps(nextprops){
        return{
           newfilteritem:nextprops.Items
        }
      }
      static getDerivedStateFromProps (nextprops)
      {

      }
handelsearchterm = (e)=>
{
    this.setState({serchterm:e.target.value} , () =>{
        this.handelfilter(this.props.Items)
        this.setState({newfilteritem:this.handelfilter(this.props.Items) })
    })
}
handelfilter = (Items) =>
{
    return Items.filter((item)=> item.title.toLowerCase().trim().indexOf(this.state.serchterm.toLowerCase().trim()) != -1)
    
}



    render(){
        const {newfilteritem} = this.state
        const {Items} = this.props
        let filtereditem = this.handelfilter(Items)
        console.log("filtereditem" , filtereditem)
     return(
        <div>
            <input type="text" placeholder="search..." onChange={this.handelsearchterm}/>
        {newfilteritem.map((item)=>
        (<div key={item.id}>
<Product
 singleitem ={item}
 key={item.id}
 deleteItem={this.props.deleteItem} 
addtofav={this.props.addtofav}
 additemcart={this.props.additemcart}
 edititem ={this.props.edititem}
/>
        </div>))}
    </div>
     )
    }
}
export default Products;