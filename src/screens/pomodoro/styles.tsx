import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`

export const ConteinerCronometro = styled.View`
    justify-content: center;
    align-items: center;
    height: 70%;
`

export const ConteinerBotoes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5%;
`

export const BotaoVazado = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.destaqueTransparente};
    width: 47%;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border-radius: 15px;
`

export const TextoBotaoVazado = styled.Text`
    color: ${({theme}) => theme.destaque};
    font-size: 20px;
`

export const BotaoNormal = styled(BotaoVazado)`
    background-color: ${({theme}) => theme.destaque};
`

export const TextoBotaoNormal = styled(TextoBotaoVazado)`
    color: ${({theme}) => theme.text};
`