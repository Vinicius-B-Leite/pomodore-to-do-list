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

//const querySnapshot = await getDocs(collection(db, "users"));
//querySnapshot.forEach((doc) => {
//  console.log(`${doc.id} => ${doc.data()}`);
//});

export default function Home() {
    const [tarefas, setTerefas] = useState<ITarefa[]>([])

    const getTarefas = async () => {
        const dados = await getDocs(colecaoTarefas)
        setTerefas(dados.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(tarefas)
    }


    useEffect(() => {
        getTarefas()

    }, [])

    const navegarTelaCreateTask = () => {
        const navigator = useNavigation()
        navigator.navigate("CreateTask")
    }

    return (
        <Conteiner>
            <StatusBar />
            <Header />
            <FloatButton funcao={navegarTelaCreateTask()} />
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