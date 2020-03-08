import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../actions/shoppingActions';
import {Button} from '@material-ui/core';


 class ProductsComponent extends Component{
   
    
    handleClick = (id)=>{
        this.props.addItem(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img_url} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                        </div>
                    <div className="rowC">
                        <div className="card-content">
                            <p>{item.name}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                        <div className="add-button">
                            <Button variant="outlined" color="primary" onClick={()=>{this.handleClick(item.id)}}>Add to Card</Button>
                        </div>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">All Items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addItem: (id)=>{dispatch(addItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsComponent)