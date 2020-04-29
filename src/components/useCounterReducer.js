import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        default: throw new Error();
    }
}

function useCounterReducer() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return [
        state,
        dispatch
    ]
}

export default useCounterReducer;
