import React, { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ITarefa } from '../../../types/ITarefa';
import { Conteiner, TituloTarefa } from './styles';
import { useTheme } from 'styled-components';


type Props = {
    tarefa: ITarefa
}
export default function Header({ tarefa }: Props) {
    const navigation = useNavigation()
    const theme = useTheme()
    return (
        <Conteiner>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={25} color={theme.text} />
            </TouchableOpacity>

            <TituloTarefa>{tarefa.descricao}</TituloTarefa>
        </Conteiner>
    )
}