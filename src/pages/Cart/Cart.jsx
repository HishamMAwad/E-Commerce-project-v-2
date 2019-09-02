import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../components/redux/cart/cart.selector';

import CheckoutItems from '../Cart/Checkout-Items';

import './CartStyle.scss';
import CustomButton from '../../components/CustomButton/CustomButton';



const Cart = ({cartItems, total}) => {



    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => (
                <CheckoutItems key={item.id} item={item}/>
            ))}

            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <CustomButton style={{marginBottom: 50}}>CHECK OUT</CustomButton>
        </div>
    );
};



const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal,
});


export default connect(mapStateToProps,null)(Cart);