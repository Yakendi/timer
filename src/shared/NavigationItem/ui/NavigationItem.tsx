import SNavigationItem from "./styles/SNavigationItem.styles"

export function NavigationItem({children}: {children: React.ReactElement}) {
    return (
        <SNavigationItem>{children}</SNavigationItem>
    )
}