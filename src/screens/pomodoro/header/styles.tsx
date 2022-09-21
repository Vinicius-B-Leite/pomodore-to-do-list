import styled from "styled-components/native";

export const Conteiner  = styled.View`
    background-color: ${({theme}) => theme.background};
    padding: 5%;
    flex-direction: row;
    align-items: center;
`

export const TituloTarefa = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 22px;
    text-transform: capitalize;
    padding-left: 5%;
`