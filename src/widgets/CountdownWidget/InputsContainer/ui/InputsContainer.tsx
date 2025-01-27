import { Button } from "../../../../shared";
import { InputsBlocksContainer } from "../InputsBlocksContainer/ui/InputsBlocksContainer";
import SInputsContainer from "./styles/SInputsContainer";

type InputsContainerProps = {
    onMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSecondsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    minutesValue: string;
    secondsValue: string;
    children: string;
    onSet: () => void;
    disabled: boolean;
    isHidden: boolean
}

export function InputsContainer({onMinutesChange, onSecondsChange, minutesValue, secondsValue, children, onSet, disabled, isHidden}: InputsContainerProps) {
    return (
        <SInputsContainer isHidden={isHidden}>
            <InputsBlocksContainer onMinutesChange={onMinutesChange} onSecondsChange={onSecondsChange} minutesValue={minutesValue} secondsValue={secondsValue}></InputsBlocksContainer>
            <Button onClick={onSet} disabled={disabled}>{children}</Button>
        </SInputsContainer>
    )
}
