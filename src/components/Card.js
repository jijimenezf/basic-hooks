import React, { useEffect } from 'react';

function Card({ onSelect }) {
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            onSelect(null);
        }, 5000);
        return () => {
            clearTimeout(timeoutID);
        }
    }, [onSelect]);

    return [1, 2, 3, 4].map(item => (
        <button
            key={item}
            data-testid={item}
            onClick={() => onSelect(item)}
        >
            {item}
        </button>
    ));
}

export default Card;
