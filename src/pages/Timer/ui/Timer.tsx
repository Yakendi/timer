import React from "react"
import { TimerWidget } from "../../../widgets/TimerWidget/TimerWidget"

function Timer() {
    return (
        <TimerWidget />
    )
}

export default React.memo(Timer)