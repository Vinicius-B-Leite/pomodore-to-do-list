import styled from "styled-components/native";


export const Botao = styled.TouchableOpacity`
    position: absolute;
    width: 20%;
    height: 11%;
    bottom: 5%;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: ${({theme}) => theme.destaque};
    border-radius: 50px
`