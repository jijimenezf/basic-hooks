import React from 'react';
import useTextField from './useTextField';

const CustomInput = () => {
    const nameField = useTextField('name');
    return (
        <input type="text" {...nameField} />
    )
};

export default CustomInput;
