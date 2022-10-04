import React from 'react-native'
import { useContext } from 'react'
import { ITarefa } from '../../../types/ITarefa'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { AntDesign } from '@expo/vector-icons';
import { Botao, Conteiner, ConteinerRoot, Swipe, Texto } from './styles';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { AdmTarefaContext } from '../../../contexts/AdmTarefaContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/models';


type Props = {
    dados: ITarefa
}
type Home = NativeStackNavigationProp<RootStackParamList, 'Home'>

export default function Item({ dados }: Props) {
    const theme = useTheme()
    const navigation = useNavigation<Home>()

    const { setExcluiuTarefa } = useContext(AdmTarefaContext)
    
    const deletarTarefa = async (id: string | undefined) => {
        if (id) {
            const tarefa = doc(db, "tarefa", id)
            await deleteDoc(tarefa)
            setExcluiuTarefa(true)
        }
    }

    function Excluir() {
        return (
            <Swipe>
                <Feather name="trash-2" style={{ marginLeft: '5%' }} size={30} color="white" />
            </Swipe>
        )
    }
    return (
        <ConteinerRoot status={dados.status}>
            <Swipeable renderLeftActions={Excluir} onSwipeableOpen={() => deletarTarefa(dados.id)}>

                <Conteiner status={dados.status}>
                    <AntDesign name="checkcircle" size={24} color={dados.status == 'concluido' ? theme.destaque : theme.desativo} />
                    <Botao status={dados.status} onPress={() => dados.status !== 'concluido' && navigation.navigate('Pomodoro', { tarefa: dados })
                    }>
                        <Texto status={dados.status}>{dados.descricao}</Texto>
                    </Botao>
                </Conteiner>

            </Swipeable>
        </ConteinerRoot>

    )
}
