import { GoPlus } from "react-icons/go"
import { InputContainer, MinusIcon, PlusIcon, StyledInput } from "./style"
import { RiSubtractLine } from "react-icons/ri"

export const InputNumber = () => {
    return (
        <InputContainer>
            <StyledInput type="text" value={1} />
            <PlusIcon>
                <GoPlus fill="#8047F8" />
            </PlusIcon>
            <MinusIcon>
                <RiSubtractLine size={14} fill="#8047F8" />
            </MinusIcon>
        </InputContainer>
    )
}
