import React from 'react';
import { act } from 'react-dom/test-utils';
import testHook from './testHook';
import useCounterReducer from '../useCounterReducer';

describe('useCounterReducer react hook', () => {
    let result;
    let useReducer;

    beforeEach(() => {
        testHook(() => {
            result = useCounterReducer();
        });

        useReducer = jest.spyOn(React, 'useReducer');
    });

    it('should have both state and dispatch', () => {
        const [state, dispatch] = result;
        expect(state.count).toEqual(0);  // Initial state
        expect(dispatch).toBeInstanceOf(Function);
    });

    it('should dispatch increment action', () => {
        expect(useReducer).toHaveBeenCalledTimes(1);
        act(() => {
            const [, dispatch] = result;
            dispatch({ type: 'increment' });
        });
        expect(result[0].count).toEqual(1);
        expect(useReducer).toHaveBeenCalledTimes(2);
    });

    it('should dispatch decrement action', () => {
        act(() => {
            const [, dispatch] = result;
            dispatch({ type: 'decrement' });
        });
        expect(result[0].count).toEqual(-1);
        expect(useReducer).toHaveBeenCalledTimes(4);
    });

});
