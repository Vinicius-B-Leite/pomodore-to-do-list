import styled from "styled-components/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export const Swipe = styled.View`
    background-color: red;
    justify-content: center;
    flex: 1;
`

interface Props {
    status: string
}
export const ConteinerRoot = styled(GestureHandlerRootView)<Props>`
    width: 100%;
`

export const Conteiner = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    background-color: ${(p) => p.status != 'andamento' ? p.theme.backgroundItemDesativo : p.theme.backgroundItem};
    padding: 5%;
`
export const Botao = styled.TouchableOpacity`
    margin-left: 4%;
`

export const Texto = styled.Text<Props>`
    font-size: 18px;
    color: ${(p) => p.status != 'andamento' ? p.theme.textoDesativo : p.theme.text};
`