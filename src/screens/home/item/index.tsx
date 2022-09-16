import React, { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { ITarefa } from '../../../types/ITarefa'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { AntDesign } from '@expo/vector-icons';
import { Botao, Conteiner, ConteinerRoot, Swipe, Texto } from './styles';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
type Props = {
    dados: ITarefa
}
export default function Item({ dados }: Props) {
    const theme = useTheme()
    function Excluir() {
        return (
            <Swipe>
                <Feather name="trash-2" style={{marginLeft: '5%'}} size={30} color="white" />
            </Swipe>
        )
    }
    return (
        <ConteinerRoot status={dados.status}>
            <Swipeable renderLeftActions={Excluir} onSwipeableOpen={() => console.log("HEHEH")}>

                <Conteiner >
                    <AntDesign name="checkcircle" size={24} color={dados.status == 'concluido' ? theme.destaque : theme.desativo} />
                    <Botao status={dados.status}><Texto status={dados.status}>{dados.descricao}</Texto></Botao>
                </Conteiner>

            </Swipeable>
        </ConteinerRoot>

    )
}
