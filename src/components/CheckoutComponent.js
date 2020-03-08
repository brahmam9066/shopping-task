import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from '@material-ui/core';
class CheckoutComponent extends Component{


    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
  
        return(
            <div className="main-container">
                <div className="collection">
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                        <Button variant="contained" color="primary">Checkout</Button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutComponent)
