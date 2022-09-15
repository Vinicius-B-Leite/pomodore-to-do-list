import { createContext, useState, Dispatch, SetStateAction } from 'react'


type TemaContext = {
    tema: string,
    setTema: Dispatch<SetStateAction<string>>
}

const ValoresIniciais = {
    tema: 'dark',
    setTema: ()=>{}
}
export const TemaConetxt = createContext<TemaContext>(ValoresIniciais)

type Props = {
    children: React.ReactNode
}
export default function ProvedorTema({children}: Props){
    const [tema, setTema] = useState<string>(ValoresIniciais.tema)
    return(
        <TemaConetxt.Provider value={{tema, setTema}}>
            {children}
        </TemaConetxt.Provider>
    )
    
}

