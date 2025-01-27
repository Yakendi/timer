import SInput from "./styles/SInput";

export function Input({onChange, value, onKeyDown}: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, onKeyDown: React.KeyboardEventHandler<HTMLInputElement>}) {
    return (
        <SInput type="number" placeholder="00" onChange={onChange} value={value} onKeyDown={onKeyDown}/>
    )
}