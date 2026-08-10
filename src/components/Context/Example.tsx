import { useContext } from "react"
import { ExampleContext } from "../../App"

function Example(){
    const textContext = useContext(ExampleContext)
    return (
        <div>
            {textContext}
        </div>
    )
}

export default Example