import React from 'react';
import useCounter from './useCounter';

const CounterExample = () => {
    const { count, onClick } = useCounter();
    /*
  + If you want to run an effect and clean it up only once (on mount and unmount),
  + you can pass an empty array ([]) as a second argument
  */
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={onClick}>
                Click me
            </button>
        </div>
    );
};

export default CounterExample;
