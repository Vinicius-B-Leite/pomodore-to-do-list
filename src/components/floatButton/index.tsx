import React, { Text } from 'react-native'
import { Botao } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    funcao: () => void,
    adicionar: boolean,
}
export default function FloatButton({funcao, adicionar}: Props){
    const tema = useTheme()
    return(
        <Botao onPress={() => funcao()}>
            {
                adicionar ?
                    <Ionicons name="add-outline" size={39} color={tema.text} />
                    :
                    <AntDesign name="check" size={39} color={tema.text} />
            }
        </Botao>
    )
}