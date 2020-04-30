import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Card from '../Card';

jest.useFakeTimers();

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should select null after timing out', () => {
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    // advance time 100ms
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // advance the 5 seconds
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(onSelect).toHaveBeenCalledWith(null);
});

it('should accept selections', () => {
    const onSelect = jest.fn();
    act(() => {
        render(<Card onSelect={onSelect} />, container);
    });

    act(() => {
        container
            .querySelector("[data-testid='2']")
            .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onSelect).toHaveBeenCalledWith(2);
});