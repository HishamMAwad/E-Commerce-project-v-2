import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../components/redux/cart/cart.actions';

import './HatsStyle.css';

const HatsItems = ({item, addItem}) => {

    const {name, price, imageUrl} = item;

    return(
        <div className='collection-item'>
            <div className='img-container'>
                <img src={imageUrl}/>
                <button type="submit" className="btn" onClick={() => addItem(item)}>ADD TO CART</button>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    );
};


const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems,
});


const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
});


export default connect(mapStateToProps, mapDispatchToProps)(HatsItems);