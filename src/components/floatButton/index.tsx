import React, { Text } from 'react-native'
import { Botao } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';


interface Props {
    funcao: () => void
}
export default function FloatButton({funcao}: Props){
    const tema = useTheme()
    return(
        <Botao onPress={() => funcao()}>
            <Ionicons name="add-outline" size={39} color={tema.text} />
        </Botao>
    )
}