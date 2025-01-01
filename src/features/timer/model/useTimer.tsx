import { useState } from 'react';
import { useInterval } from '../../../shared/lib/hooks/useInterval';

export const useTimer = () => {
    const [time, setTimer] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const toggleTimer = () => setIsRunning(prev => (prev = !prev));

    useInterval(
        () => {
            setTimer(prev => prev + 1);
        },
        isRunning ? 1000 : null
    );

    const resetTimer = () => {
        setTimer(0);
        setIsRunning(prev => (prev = !prev));
    };

    return { time, isRunning, toggleTimer, resetTimer };
};
