import React from 'react';
import ThemedButton from './ThemedButton';

const Toolbar = ({ onChange }) => {
    return (
        <ThemedButton onChange={onChange} />
    )
};

export default Toolbar;
