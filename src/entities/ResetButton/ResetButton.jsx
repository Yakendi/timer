import { Button } from "../../shared"

export function ResetButton({ onClick , children = "Reset" }) {
    return (
    <Button onClick= {onClick} children= {children}/>
    )
}