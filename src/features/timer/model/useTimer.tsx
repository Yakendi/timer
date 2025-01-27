import { useState } from 'react';
import { useInterval } from '../../../shared/lib/hooks/useInterval';

export const useTimer = (initialTime: number = 0, isCountdown: boolean = false) => {
    const [time, setTimer] = useState<number>(initialTime);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timerState, setTimerState] = useState<string>('stopped');
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

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

    const resetTimer = () => {
        setTimer(initialTime);
        setTimerState('stopped');
        setIsRunning(false);
        setIsDisabled(true);
    };

    const setInitialTime = (newInitialTime: number) => {
        setTimer(newInitialTime);
        setTimerState('stopped');
        setIsRunning(false);
        setIsDisabled(true);
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
                setTimer((prev) => {
                    if (isCountdown) {
                        const nextTime = prev - 0.01;
                        if (nextTime <= 0) {
                            setIsRunning(false);
                            setTimerState('stopped');
                            return 0;
                        }
                        return nextTime;
                    } else {
                        return prev + 10;
                    }
                });
            },
            isRunning ? 10 : null
        );

    return { time, isDisabled, timerState, toggleTimer, resetTimer, setInitialTime, buttonText };
};