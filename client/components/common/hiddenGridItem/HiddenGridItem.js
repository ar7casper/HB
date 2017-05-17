/**
 * Created by Alex on 16/05/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const HiddenGridItem = (props) => {
    return (
        <div className={props.extraClass}
             style={{visibility: 'hidden', margin: `${props.margin}px`}}
        >
        </div>
    )
};

HiddenGridItem.propTypes = {
    extraClass: PropTypes.string
};

export default HiddenGridItem;