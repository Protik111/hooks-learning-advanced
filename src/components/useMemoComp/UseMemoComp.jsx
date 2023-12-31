import React, { useEffect, useState, useMemo } from 'react';

const getArr = () => {
    for (let i = 0; i < 10000000; i++) {

    }
    return ['Learning', 'useMemo']
}


const UseMemoComp = () => {

    const [userNumber, setUserNumber] = useState('');
    const [randomInput, setRandomInput] = useState('');

    const fib = useCallback((n) => {
        return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
    }, [])

    const fibNumber = useMemo(() => fib(userNumber), [userNumber]);

    const myArray = useMemo(() => getArray(), []);

    useEffect(() => {
        console.log('New array')
    }, [myArray])

    return (
        <div>
            <h1>useMemo Hooks</h1>
            <label>Fibonacci Sequence:</label>
            <input type="number" value={userNumber} placeholder="Position" onChange={(e) => setUserNumber(e.target.value)} />
            <p>Number: {fibNumber || "--"}</p>
            <br /><br />
            <label>Random Input:</label>
            <input type="text" value={randomInput} placeholder="Random Input" onChange={(e) => setRandomInput(e.target.value)} />
            <p>{randomInput}</p>
        </div >
    );
};

export default UseMemoComp;