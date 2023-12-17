import { useEffect, useState } from "react"

function useDelay(inputValue: any, delayTime: number){
    const [keyWord,setKeyWord] = useState<string | "">(inputValue)
    useEffect(() => {     
        const handleInput = setTimeout(() =>{   
            setKeyWord(inputValue)
        },delayTime)
        return () => clearTimeout(handleInput)

    },[inputValue,delayTime])

    return keyWord       
}
export {useDelay}