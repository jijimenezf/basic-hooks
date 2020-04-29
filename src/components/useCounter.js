import { useState, useEffect } from 'react';

const useCounter = () => {
    // Declare a new state variable
    const [count, setCount] = useState(0); // returns a pair: the current state value and a function that lets you update it
    const [post, setPost] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You got ${post.length} results`;

        async function fetchData() {
            try {
                await fetch('https://ergast.com/api/f1/2018/results/1.json')
                    .then(response => response.json())
                    .then(data => setPost(data.MRData.RaceTable.Races));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [post]); // Only re-run the effect if count changes
    // skip applying an effect if certain values haven’t changed between re-renders

    const onClick = () => setCount(count + 1);

    return {
        count,
        onClick
    }
};

export default useCounter;
