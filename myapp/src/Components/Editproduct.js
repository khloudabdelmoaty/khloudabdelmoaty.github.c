import { Component } from "react";
import {BrowserRouter as  Redirect} from "react-router-dom"
class Editroduct extends Component {
state = {
    Data:{}, 
    updatatitle:"", 
    updataprice:"",
    redirect:false,
}

componentDidMount(){
    let productid = localStorage.getItem("product id");
    const  Data = JSON.parse(localStorage.getItem("data")).find(
        (item)=> item.id == productid
    );
    this.setState({Data});

    console.log(productid)
}
handelchange=(e)=>
{
this.setState({
    [e.target.id]: e.target.value
})
}


    render()
    {const {Data , updatatitle , updataprice} =this.state
    console.log(this.state.Data)
    

        return(
           <>
            {this.state.redirect && <Redirect to="/Editproduct"/>}
            <form onSubmit={(e)=> this.props.Saveupdatadata(e, updataprice , updatatitle)}>
            <input type="text" id="name"  placeholder="First Name" id ="updatatitle"
             value={updatatitle ? updatatitle: Data && Data.title}
             onChange={this.handelchange}
             />
            <br/>
            <input type="text" id="Email" 
             placeholder="Email" id ="updataprice"
             value={updataprice ? updataprice: Data && Data.price}
             onChange={this.handelchange}
             />
            <br/>
            
            <input type="submit" value="update"/>
        </form>
           </>
        )
    }
}
export default Editroduct;