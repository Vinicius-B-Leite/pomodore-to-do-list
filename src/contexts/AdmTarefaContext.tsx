import { createContext, useState, Dispatch, SetStateAction } from 'react'

type AdmTarefaContext =  {
    adicionouTarefa: boolean,
    setAdicionouTarefa: Dispatch<SetStateAction<boolean>>,
    excluiuTarefa: boolean,
    setExcluiuTarefa: Dispatch<SetStateAction<boolean>>
}

const Valores = {
    adicionouTarefa: false,
    setAdicionouTarefa: () => {},
    excluiuTarefa: false,
    setExcluiuTarefa: () => {}
}
export const AdmTarefaContext = createContext<AdmTarefaContext>(Valores)

type Props = {
    children: React.ReactNode
}
export function AdmTarefaContextProvider({children}: Props){

    const [adicionouTarefa, setAdicionouTarefa] = useState(Valores.adicionouTarefa)
    const [excluiuTarefa, setExcluiuTarefa] = useState(Valores.excluiuTarefa)
    return (
        <AdmTarefaContext.Provider value={{
            adicionouTarefa,
            setAdicionouTarefa, 
            excluiuTarefa, 
            setExcluiuTarefa
        }}>
            {children}

        </AdmTarefaContext.Provider>
    )
}