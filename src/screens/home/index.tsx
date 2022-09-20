import React, { FlatList, StatusBar, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { Conteiner, Tarefas } from './styles'
import FloatButton from '../../components/floatButton'
import Header from './header'
import { getDocs } from "firebase/firestore";
import { colecaoTarefas } from '../../firebase/firebase'
import { ITarefa } from '../../types/ITarefa'
import Item from './item'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/models'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Home = NativeStackNavigationProp<RootStackParamList, 'Home'>

export default function Home() {
    const [tarefas, setTerefas] = useState<ITarefa[]>([])
    const navigator = useNavigation<Home>()

    const getTarefas = async () => {
        const dados = await getDocs(colecaoTarefas)
        setTerefas(dados.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(tarefas)
    }


    useEffect(() => {
        getTarefas()

    }, [])


    return (
        <Conteiner>
            <StatusBar />
            <Header />
            <FloatButton adicionar={true} funcao={()=> navigator.navigate("CreateTask")} />
            <Tarefas>

                <FlatList
                    data={tarefas}
                    renderItem={({ item }) => <Item dados={item} />}
                    keyExtractor={item => item.id}
                />
            </Tarefas>
        </Conteiner>
    )
}