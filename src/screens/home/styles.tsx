import styled, { css } from 'styled-components/native'




export const Texto = styled.Text`
    color: ${({theme}) => theme.text};
    word-break: break-all;
`

interface Props {
    pesoFont: number
}
export const TextoNegrito = styled(Texto)<Props>`
    font-weight: ${(prop) => prop.pesoFont};
`
export const Conteiner = styled.View`
    background-color: ${({theme}) => theme.background};
    flex: 1;
`
export const Tarefas = styled.View`
    padding: 5%;
`