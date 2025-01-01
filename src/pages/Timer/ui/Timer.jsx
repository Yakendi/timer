import { TimerContainer } from "../../../widgets/TimerContainer"
import { ButtonsContainer } from "../../../widgets/ButtonsContainer"
import { StartStopButton } from "../../../entities/StartStopButton"
import { TimerController } from "../../../features/timer/model/timerController"

export function Timer() {
    const { time, isRunning, toggleTimer, resetTimer } = TimerController();

    return (
        <div>
            <StartStopButton onClick={toggleTimer}>
                { isRunning ? "Stop" : "Start" }
            </StartStopButton>
            <button onClick={resetTimer}>Reset</button>
            <h1>Time: {time}</h1>
        </div>
    )
}