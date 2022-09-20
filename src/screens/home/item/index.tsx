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
type Props = {
    dados: ITarefa
}
export default function Item({ dados }: Props) {
    const theme = useTheme()
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

                <Conteiner >
                    <AntDesign name="checkcircle" size={24} color={dados.status == 'concluido' ? theme.destaque : theme.desativo} />
                    <Botao status={dados.status}>
                        <Texto status={dados.status}>{dados.descricao}</Texto>
                    </Botao>
                </Conteiner>

            </Swipeable>
        </ConteinerRoot>

    )
}
