import { useState, useRef, useEffect } from 'react';
import { StartStopButton } from '../../entities/StartStopButton';

export function StartStopTimer() {
    const [timerState, setTimerState] = useState('stopped');
    const [elapsedTime, setElapsedTime] = useState(0);

    function handleStartStop() {
        if (timerState === 'stopped' || timerState === 'paused') {
            setTimerState('running');
        } else {
            setTimerState('paused');
        }
    }

    const buttonText = timerState === 'stopped' ? 'Start' : timerState === 'running' ? 'Pause' : 'Resume';

    useEffect(() => {
        if (timerState === 'running') {
            const interval = setInterval(() => {
                setElapsedTime(Date.now() + 10);
            }, 10);

            return () => clearInterval(interval);
        }
    }, [timerState]);

    return <StartStopButton onClick={handleStartStop} children={buttonText} />;
}
