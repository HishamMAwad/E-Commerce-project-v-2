import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionSections} from '../../components/redux/collection/collection.selector';

import HatsItems from './Hats-Items';
import Footer from '../../components/Footer/Footer';

import './HatsStyle.css';


const Hats = ({products}) => {
    
    return (
        <div>
            <div className='item-container'>
            {products.hats.map(item => (
                <HatsItems key={item.id} item={item}/>
            ))}
            </div>
        </div>
    )

};


const mapStateToProps = createStructuredSelector({
    products: selectCollectionSections
});


export default connect(mapStateToProps, null)(Hats);