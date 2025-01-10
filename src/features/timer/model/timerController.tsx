import { useTimer } from './useTimer';

export const TimerController = () => {
    const { time, isDisabled, toggleTimer, buttonText, resetTimer } = useTimer();

    return {
        time,
        isDisabled,
        toggleTimer,
        buttonText,
        resetTimer,
    };
};
