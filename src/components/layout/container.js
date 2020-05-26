import React from 'react';
import PropTypes from 'prop-types';

function BlankContainer (props) {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
}

BlankContainer.propTypes = {

};

BlankContainer.defaultProps = {

};

export default BlankContainer;