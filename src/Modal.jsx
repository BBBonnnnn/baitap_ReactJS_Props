import React, { Component } from 'react'

export default class Modal extends Component {


    render() {
        let { setStateModal, item } = this.props
        return (
            <div>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View detail
                    <i className="fa fa-shopping-cart"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content ">
                            <div className="modal-header align-item-center">
                                <h1 className="modal-title fs-5 " id="exampleModalLabel"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <img src={item.image} alt="..."  />
                                <h1 className='text-center'>{item.name}</h1>
                                <p><b>Alias: </b>{item.alias}</p>
                                <p className='text-danger'><b>Price: </b>{item.price}$</p>
                                <p><b>Description: </b>{item.description}</p>
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
}
