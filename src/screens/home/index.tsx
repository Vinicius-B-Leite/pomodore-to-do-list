import React, { FlatList, StatusBar, Text, View } from 'react-native'
import { useState, useEffect,useContext } from 'react'
import { Conteiner, Tarefas } from './styles'
import FloatButton from '../../components/floatButton'
import Header from './header'
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { colecaoTarefas, db } from '../../firebase/firebase'
import { ITarefa } from '../../types/ITarefa'
import Item from './item'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/models'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AdmTarefaContext } from '../../contexts/AdmTarefaContext'

type Home = NativeStackNavigationProp<RootStackParamList, 'Home'>

export default function Home() {
    const [tarefas, setTerefas] = useState<ITarefa[]>([])
    const navigator = useNavigation<Home>()
    const [refresh, setRefresh] = useState(false)
    const { adicionouTarefa, setAdicionouTarefa, excluiuTarefa, setExcluiuTarefa, concluiuTarefa, setConcluiuTarefa } = useContext(AdmTarefaContext)

    const getTarefas = async () => {
        const dados = await getDocs(colecaoTarefas)
        setTerefas(dados.docs.map((doc) => ({ ...doc.data(), id: doc.id })).sort((a, b)=>{
            if (a.status === 'concluido') return 1
            else return -1
        }))
    }



    useEffect(() => {
        getTarefas()
        setAdicionouTarefa(false)
        setExcluiuTarefa(false)
        setConcluiuTarefa(false)
    }, [adicionouTarefa, excluiuTarefa, concluiuTarefa])


    return (
        <Conteiner>
            <StatusBar />
            <Header />
            <FloatButton adicionar={true} funcao={() => navigator.navigate("CreateTask")} />
            <Tarefas>

                <FlatList
                    data={tarefas}
                    renderItem={({ item }) => <Item dados={item} />}
                    keyExtractor={item => item.descricao}
                    refreshing={refresh}
                    onRefresh={() => {
                        setRefresh(true)
                        getTarefas()
                        setRefresh(false)
                    }}
                />
            </Tarefas>
        </Conteiner>
    )
}