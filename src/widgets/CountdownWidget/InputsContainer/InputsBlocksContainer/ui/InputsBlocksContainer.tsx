import { useInput } from "../../../../../features/input/model/useInput";
import { Input } from "../../../../../shared/Input";
import SInputsBlocksContainer from "./styles/SInputsBlocksContainer";

export function InputsBlocksContainer({
    onMinutesChange,
    onSecondsChange,
    minutesValue,
    secondsValue,
}: {
    onMinutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSecondsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    minutesValue: string;
    secondsValue: string;
}) {

    const formatValue = (value: string) => (value && parseInt(value) < 10 ? `0${value}` : value);
    const {handleKeyDown} = useInput()

    return (
        <SInputsBlocksContainer>
            <Input onChange={onMinutesChange} value={formatValue(minutesValue)} onKeyDown={handleKeyDown}/>
            <Input onChange={onSecondsChange} value={formatValue(secondsValue)} onKeyDown={handleKeyDown}/>
        </SInputsBlocksContainer>
    );
}