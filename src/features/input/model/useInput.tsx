import { useState } from "react";

const MAX_MINUTES = 720;
const MAX_SECONDS = 59;

export function useInput() {
    const [blockHidden, setBlockHidden] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [minutesValue, setMinutesValue] = useState<string>("");
    const [secondsValue, setSecondsValue] = useState<string>("");
    const [isActive, setIsActive] = useState<boolean>(true)

    const setValue = () => {
        if(minutesValue || secondsValue) {
            setIsHidden((prev) => !prev);
        }
        setBlockHidden((prev => !prev))
    };

    const totalTime = (parseInt(minutesValue || "00") * 60) + parseInt(secondsValue || "00");

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (
            ["e", "E", ".", "-", ","].includes(e.key) // Запрещенные символы
        ) {
            e.preventDefault();
        }
    }

    function changeMinutes(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Math.min(Math.max(0, Number(e.target.value)), MAX_MINUTES);
        setMinutesValue(value.toString());
        if (value) {
            setIsActive(false)
        }
    }
    
    function changeSeconds(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Math.min(Math.max(0, Number(e.target.value)), MAX_SECONDS);
        setSecondsValue(value.toString());

        if (value) {
            setIsActive(false)
        }
    }

    return {
        blockHidden,
        isHidden,
        isActive,
        setValue,
        totalTime,
        minutesValue,
        secondsValue,
        changeMinutes,
        changeSeconds,
        setMinutesValue,
        setSecondsValue,
        handleKeyDown
    };
}