import { GoPlus } from "react-icons/go"
import { InputContainer, MinusIcon, PlusIcon, StyledInput } from "./style"
import { RiSubtractLine } from "react-icons/ri"
import { useContext } from "react"
import { CoffeeContext } from "../../Context"

export const InputNumber = () => {
    const {setCount, count} = useContext(CoffeeContext)

    function addProduct () {
        setCount((prevCount: number) => prevCount + 1)
    }
    function removeProduct () {
        setCount((prevCount: number) => prevCount !== 0 ? prevCount - 1 : 0)
    }
    return (
        <InputContainer>
            <StyledInput type="text" value={count} />
            <PlusIcon>
                <GoPlus fill="#8047F8" onClick={addProduct} />
            </PlusIcon>
            <MinusIcon>
                <RiSubtractLine size={14} fill="#8047F8" onClick={removeProduct} />
            </MinusIcon>
        </InputContainer>
    )
}
