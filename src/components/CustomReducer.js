import React from 'react';
import useCounterReducer from './useCounterReducer';

function CustomReducer() {
    const [state, dispatch] = useCounterReducer();
    return (
        <div>
            Count using the reducer: {state.count}
            <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({ type: 'increment'})}>+</button>
        </div>
    )
}

export default CustomReducer;
