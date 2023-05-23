import React, { Component } from 'react'
import Modal from './Modal'

export default class ProductItem extends Component {

  render() {
    
    let {item,setStateModal} = this.props
    return (
      <div className='card'>
        <img src={item.image} alt="..."   />
        <div className='card-body'>
            <h3>{item.name}</h3>
            <p className='text-danger'>{item.price}$</p>
            {/* <button className='btn btn-primary' onClick={()=>{
                {setStateModal()}
            }}>
                Add to carts
                <i className="fa fa-shopping-cart"></i>
            </button> */}
            {/* <Modal setStateModal={this.props.setStateModal}></Modal> */}
            {/* <Modal item={item}/> */}
            <Modal item={item}/>
        </div>

      </div>
    )
  }
}
