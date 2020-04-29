import React, { Component } from 'react'
import Product from './Product';
import Title from "./Title";
import { ProductConsumer, ProductProvider } from  '../context';

export default class ProductList extends Component {
    
    render(){   
        return(
            <React.Fragment>
                {/* padding for whole product list  */}
                <div className = "py-5">
                <div className = "container">
                    <Title name = "our" title = "products" />
                    {/* product row */}
                <div className = "row">
                <ProductConsumer>
                    {value =>{
                       return value.products.map( product => {
                           return  <Product key = {product.id} product = 
                           {product} />;
                       })

                    }}
                </ProductConsumer>
                </div>
                </div>
                </div>
            </React.Fragment>
            
        )
    }
}
