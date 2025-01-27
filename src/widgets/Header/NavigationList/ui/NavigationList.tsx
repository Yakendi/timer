import { NavigationItem } from "../../../../shared/NavigationItem/ui/NavigationItem";
import { Link } from "../../../../shared/NavigationLink";
import SNavigationList from "./styles/SNavigationList.styles";

export function NavigationList() {

    const pages = {
        stopwatch: "Stopwatch",
        countdown: "Countdown"
    }

    const href = {
        stopwatch: "/",
        timer: "/countdown"
    }

    return (
        <SNavigationList>
            <NavigationItem>
                <Link href={href.stopwatch}>{pages.stopwatch}</Link>
            </NavigationItem>
            <NavigationItem>
                <Link href={href.timer}>{pages.countdown}</Link>
            </NavigationItem>
        </SNavigationList>
    )
}