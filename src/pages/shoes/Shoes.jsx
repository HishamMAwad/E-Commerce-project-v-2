import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionSections} from '../../components/redux/collection/collection.selector';

import ShoesItems from './Shoes-item';

import Footer from '../../components/Footer/Footer';
import './Shoes.Style.css';


const Shoes = ({products}) => {
    
    return (
        <div>
            <div className='item-container'>
            {products.shoes.map(item => (
                <ShoesItems key={item.id} item={item}/>
            ))}
        </div>
        </div>
    )

};


const mapStateToProps = createStructuredSelector({
    products: selectCollectionSections
});


export default connect(mapStateToProps, null)(Shoes);