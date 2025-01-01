import { ResetButton } from "../../entities/ResetButton/ResetButton";

export function ResetTimer() {

    function reset() {
        console.log("reset")
    }

    return(
        <ResetButton onClick = { reset } children = "Reset" />
    )
}