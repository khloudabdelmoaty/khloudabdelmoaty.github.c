import React , {Component  } from 'react';
class Creatproduct extends Component 
{
    render(){
        return(
            
            <form onSubmit={this.props.additem}>
               <input type="text"  id="newtitle"  value={this.props.newtitle} placeholder=" enter product name" onChange={this.props.handelchangeinput}/> 
               <input type="text"  id="newprice"  value={this.props.newprice}  onChange={this.props.handelchangeinput}/>
               <input type="submit"  />
            </form>
        )
    }
}
export default Creatproduct;