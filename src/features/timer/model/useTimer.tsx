import { useState } from 'react';
import { useInterval } from '../../../shared/lib/hooks/useInterval';

export const useTimer = () => {
    const [time, setTimer] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timerState, setTimerState] = useState<string>("stopped")
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const toggleTimer = () => {
        if (timerState === 'stopped' || timerState === 'paused') {
            setTimerState('running');
            setIsRunning(true);
            setIsDisabled(false);
        } else {
            setTimerState('paused');
            setIsRunning(false);
        }
    };

    const buttonText = () => {
        switch (timerState) {
            case 'stopped':
                return 'Start';
            case 'running':
                return 'Pause';
            case 'paused':
                return 'Resume';
            default:
                return '';
        }
    };

    useInterval(
        () => {
            console.log("run");
            setTimer(prev => prev + 10);
        },
        isRunning ? 10 : null
    );

    const resetTimer = () => {
        setTimer(0);
        setTimerState('stopped');
        setIsRunning(false);
        setIsDisabled(true);
    };

    return { time, isDisabled, toggleTimer, buttonText, resetTimer };
};
