import React, { useState } from 'react';
import { ThemeContext, themes } from './theme-context';
import Toolbar from "./Toolbar";

function AppContext() {
    const [myTheme, setMyTheme] = useState(themes.light);

    const toggleTheme = () => {
        setMyTheme(myTheme === themes.dark
            ? themes.light
            : themes.dark);
    };

    return (
        <ThemeContext.Provider value={myTheme}>
            <Toolbar onChange={toggleTheme} />
        </ThemeContext.Provider>
    );
}

export default AppContext;