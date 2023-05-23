import React, { Component } from 'react'
// import Data from './Data/data.json'
import ProductItem from './ProductItem';
// const dataProducts = Data;
export default class ProductList extends Component {
    
    render() {
        let {productsData,setStateModal} = this.props
        return (
            <div className='container'>
                <h1 className='text-center'>Shoes Shop</h1>
                <div className='row'>
                    {productsData.map((product)=>{
                        return <div className='col-4 p-4' key={product.id} >
                                     <ProductItem item={product} setStateModal={setStateModal} />   
                            </div>
                    })}
                   
                </div>
            </div>

)
}
}

