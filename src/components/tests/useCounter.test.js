import React from 'react';
import { act } from 'react-dom/test-utils';
import testHook from './testHook';
import useCounter from '../useCounter';

describe('useCounter react hook', () => {
    let result;
    let useEffect;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    beforeEach(() => {
        testHook(() => {
            result = useCounter();
        });

        /* mocking useEffect */
        useEffect = jest.spyOn(React, 'useEffect');
        mockUseEffect(); // 2 times
        mockUseEffect(); //
    });

    it('should have an onClick function', () => {
       expect(result.onClick).toBeInstanceOf(Function);
    });

    it('should have an initial value of zero', () => {
        expect(result.count).toEqual(0);
    });

    it('should increase the value of counter', () => {
        act(() => {
            result.onClick();
        });
        expect(result.count).toEqual(1);
    });

    // Try not to run at the beginning
    it('should call side effect', () => {
        /* act(() => {
            result.onClick();
        }); */
        expect(useEffect).toHaveBeenCalledTimes(4); // it's 5 updating the state inside this test
    });
});
