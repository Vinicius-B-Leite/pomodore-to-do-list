import { createContext, useState, Dispatch, SetStateAction } from 'react'

type AdmTarefaContext =  {
    adicionouTarefa: boolean,
    setAdicionouTarefa: Dispatch<SetStateAction<boolean>>,
    excluiuTarefa: boolean,
    setExcluiuTarefa: Dispatch<SetStateAction<boolean>>,
    concluiuTarefa: boolean,
    setConcluiuTarefa: Dispatch<SetStateAction<boolean>>
}

const Valores = {
    adicionouTarefa: false,
    setAdicionouTarefa: () => {},
    excluiuTarefa: false,
    setExcluiuTarefa: () => {},
    concluiuTarefa: false,
    setConcluiuTarefa: () => {}
}
export const AdmTarefaContext = createContext<AdmTarefaContext>(Valores)

type Props = {
    children: React.ReactNode
}
export function AdmTarefaContextProvider({children}: Props){

    const [adicionouTarefa, setAdicionouTarefa] = useState(Valores.adicionouTarefa)
    const [excluiuTarefa, setExcluiuTarefa] = useState(Valores.excluiuTarefa)
    const [concluiuTarefa, setConcluiuTarefa] = useState(Valores.concluiuTarefa)
    return (
        <AdmTarefaContext.Provider value={{
            adicionouTarefa,
            setAdicionouTarefa, 
            excluiuTarefa, 
            setExcluiuTarefa,
            concluiuTarefa,
            setConcluiuTarefa
        }}>
            {children}

        </AdmTarefaContext.Provider>
    )
}