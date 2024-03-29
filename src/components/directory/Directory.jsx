
import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../redux/directory/directory.selector';

import  MenuItems from '../menu-items/MenuItems';
import './DirectoryStyle.scss';



const Directory = ({sections}) => {
    return(
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps}) => (
                <MenuItems key={id} {...otherSectionProps}/>
            ))}
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});


export default connect(mapStateToProps, null)(Directory);