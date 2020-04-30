import React from 'react';
import { useThemeContext } from './theme-context';

function ThemedButton({ onChange }) {
    const theme = useThemeContext();
    return (
        <button style={{ background: theme.background, color: theme.foreground }}
        onClick={onChange}>
            I am styled by theme context!
        </button>
    );
}

export default ThemedButton;
