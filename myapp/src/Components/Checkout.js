import React,{useState} from "react"
import Modal  from "react-modal";
 Modal.setAppElement("#root");
 
function Checkout({Checkout}){
  const [modalIsOpen,setModalIsOpen]= useState(false);
    return    (
        <div>
            <button onClick={()=> setModalIsOpen(true)} >Checkout</button>
            <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <form>
            <input type="text" id="name"  placeholder="First Name"/>
            <br/>
            <input type="text" id="Email"  placeholder="Email"/>
            <br/>
            <input type="password" id="password"  placeholder="Password"/>
            <br/>
            <input type="submit" onClick={()=>Checkout()} />
        </form>
        </Modal>
        </div>
    )
}
export default Checkout;