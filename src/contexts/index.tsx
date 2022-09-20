import React from 'react'
import { AdmTarefaContextProvider } from './AdmTarefaContext'
import ProvedorTema from './TemaContext'


type Props = {
    children: React.ReactNode
}
export default function Contexts({children}: Props){
    return (
        <ProvedorTema>
            <AdmTarefaContextProvider>
                {children}
            </AdmTarefaContextProvider>
        </ProvedorTema>
    )
}