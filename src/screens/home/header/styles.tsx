import styled from 'styled-components/native'




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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5% 10%;
`

    export const Data = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 40%;
    `
        export const DiaMensal = styled(TextoNegrito)`
            font-size: 40px;
        `
        export const MesAno = styled.View`
            align-items: center;
            justify-content: center;
        `

