import React, { Component } from 'react'
import ProductList from './ProductList'
import Data from './Data/data.json'
import Modal from './Modal'
export default class ShoesShop extends Component {

setStateModal = () => {
        return (<div>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                View detail
                <i className="fa fa-shopping-cart"></i>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog text-center">
                    <div className="modal-content ">
                        <div className="modal-header align-item-center">
                            <h1 className="modal-title fs-5 " id="exampleModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <img src='' alt="..." />
                            <h1>tên</h1>
                            <p>bí danh</p>
                            <p>giá$</p>
                            <p>mô tả</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    state = {
        productDetail: ''
    }

    render() {
        const products = Data;
        return (
            <div>
                <ProductList productsData={products} setStateModal={this.setStateModal} />
            </div>
        )
    }
}

