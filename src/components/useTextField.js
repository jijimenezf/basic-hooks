import { useState } from 'react';

/**
 * Custom effect for handling the data entered in an input field
 * @param name
 * @returns {{onChange: (function(*): void), name: *, placeholder: *, value: string}}
 */
const useTextField = name => {
    const [value, setValue] = useState('');

    const onChange = event => setValue(event.target.value);

    return {
        name,
        value,
        onChange,
        placeholder: name,
    }
};

export default useTextField;
