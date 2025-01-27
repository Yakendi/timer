import { useState } from "react";

export function useNavigation() {
    const [activeLink, setActiveLink] = useState("stopwatch");

    function toggleLink(link: string) {
        setActiveLink(link);
    };

    return { activeLink, toggleLink };
}