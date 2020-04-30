import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Toggle from '../Toggle';

describe('testing Toggle compoment', () => {
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

    it('should change the value after clicking', () => {
        // const onChange = jest.fn();
        act(() => {
            render(<Toggle />, container);
        });

        const button = document.querySelector("[data-testid=toggle]");
        expect(button.innerHTML).toEqual('Turn On');

        act(() => {
            // can't use find then simulate click because the selector is done over the document
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        // expect(onChange).toHaveBeenCalledTimes(1);
        expect(button.innerHTML).toEqual('Turn Off');

        act(() => {
            for (let i = 0; i < 5; i++) {
                button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }
        });

        // expect(onChange).toHaveBeenCalledTimes(6);
        expect(button.innerHTML).toEqual('Turn On');
    });
});