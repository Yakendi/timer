import { useNavigation } from "./useNavigation";

export function NavigationController() {
    const { activeLink, toggleLink } = useNavigation();

    return { activeLink, toggleLink }
}