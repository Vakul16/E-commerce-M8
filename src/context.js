import React, { Component } from 'react';
import { storeProducts } from './data';

const ProductContext = React.createContext();
//Provider : provides all info for all our app
//Consumer : grabing whatever in our app
class ProductProvider extends Component {
    state = {
        products : storeProducts,
        //detailProduct : detailProduct
    };
    handleDetail = () =>{
        console.log('hello from detail');
    };
    addToCart = () =>{
        console.log('hello from add to cart');
    };
    render(){
        return(
            <ProductContext.Provider value = {{
                //we get all properties which had in the state by below line
                ...this.state,
                handleDetail : this.handleDetail,
                addToCart : this.addToCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};