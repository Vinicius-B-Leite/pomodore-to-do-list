import styled from "styled-components/native";

export const Conteiner = styled.View`
    padding: 5%;
    background-color: ${({theme}) => theme.background};
    flex: 1;
`

export const ConteinerInput = styled.View`
    background-color: ${({theme}) => theme.backgroundItem};
    border-radius: 10px;
    padding: 5%;
`

export const Input = styled.TextInput`
    color: ${({theme}) => theme.text};
`

export const ConteinerPomodoroConfig = styled.View`
`

export const TituloPomodoroConfig = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 19px;
    margin:10% 0% 5% 3%;
`

export const OpcoesPomodoroConfig = styled.View `
    background-color: ${({theme}) => theme.backgroundItem};
    padding: 5%;
    border-radius: 10px;
    height: 55%;
    justify-content: space-between;
`
export const ConteinerTexto = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Texto = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 18px;
    line-height: 30px;
`

export const BotaoTempoTrabalho = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin: 10px;
`
export const TextoBotaoTempoTrabalho = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 16px;
`

export const BotaoTempoTrabalhoAtivo = styled(BotaoTempoTrabalho)`
    background-color: ${({theme}) => theme.destaque};
`
