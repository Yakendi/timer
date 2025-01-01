import { useTimer } from './useTimer';

export const TimerController = () => {
    const { time, isRunning, toggleTimer, resetTimer } = useTimer();

    return {
        time,
        isRunning,
        toggleTimer,
        resetTimer,
    };
};
