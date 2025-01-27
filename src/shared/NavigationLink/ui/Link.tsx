import SLink from "./styles/SLink.styles"

export function Link({href, children}: {href: string, children: string}) {
    return (
        <SLink href={href}>{children}</SLink>
    )
}