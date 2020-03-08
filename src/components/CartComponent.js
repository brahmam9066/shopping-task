import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/shoppingActions';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {Button} from '@material-ui/core';
import CheckoutComponent from './CheckoutComponent'

// import Recipe from './Recipe'
class CartComponent extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
   
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
   
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img_url} alt={item.title} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p>{item.type}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><ArrowDropUpIcon onClick={()=>{this.handleAddQuantity(item.id)}} /></Link>
                                            <Link to="/cart"><ArrowDropDownIcon onClick={()=>{this.handleSubtractQuantity(item.id)}} /></Link>
                                        </div>
                                        <Button variant="outlined" color="secondary" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <CheckoutComponent />
                </div>   

            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartComponent)