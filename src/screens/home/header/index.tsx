import React from 'react-native'
import { Data, DiaMensal, MesAno, TextoNegrito, Texto, Conteiner } from './styles'


export default function Header() {
    const getData = () => {
        const data = new Date()
        const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        return {
            diaSemanal: dias[data.getDay()],
            diaMensal: data.getDate(),
            mes: meses[data.getMonth()],
            ano: data.getFullYear()
        }
    }
    const data = getData()

    return (
        <Conteiner>
            <Data>
                <DiaMensal pesoFont={500}>{data.diaMensal}</DiaMensal>
                <MesAno>
                    <TextoNegrito pesoFont={600}>{data.mes}</TextoNegrito>
                    <Texto>{data.ano}</Texto>
                </MesAno>
            </Data>
            <TextoNegrito pesoFont={700}>{data.diaSemanal}</TextoNegrito>
        </Conteiner>
    )
}