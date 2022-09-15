import React, { Text } from 'react-native'
import { Botao } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export default function FloatButton(){
    const tema = useTheme()
    return(
        <Botao>
            <Ionicons name="add-outline" size={39} color={tema.text} />
        </Botao>
    )
}