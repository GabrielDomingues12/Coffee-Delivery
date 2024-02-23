/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export interface CoffeeProductProps {
    id: string,
    image: string,
    name: string,
    type: string[]
}
interface CoffeeInterface {
    data: CoffeeProductProps[],
    setData: (e:any) => void 
    setCount: (e:any) => void 
    count: number
}

interface CoffeeProviderProps {
    children: React.ReactNode
}
export const CoffeeContext = createContext({} as CoffeeInterface)

export const CoffeProvider = ({children}: CoffeeProviderProps) => {
    const [data, setData] = useState<CoffeeProductProps[]>([])
    const [count, setCount] = useState(0)
    return (
        <CoffeeContext.Provider 
        value={{
            data,
            setData,
            count,
            setCount
        }}>
            {children}  
        </CoffeeContext.Provider>
    )
}