import React, { StatusBar} from 'react-native'
import { useState, useEffect } from 'react'
import { Conteiner } from './styles'
import FloatButton from '../../components/floatButton'
import Header from '../header'
import { getDocs } from "firebase/firestore"; 
import { colecaoTarefas } from '../../firebase/firebase'
import { ITarefa } from '../../types/ITarefa'

//const querySnapshot = await getDocs(collection(db, "users"));
//querySnapshot.forEach((doc) => {
//  console.log(`${doc.id} => ${doc.data()}`);
//});

export default function Home() {
    const [tarefas, setTerefas] = useState<ITarefa[]>([])

    const getTarefas = async () => {
        const dados = await getDocs(colecaoTarefas)
        console.log(dados)
    }

    

    return (
        <Conteiner>
            <StatusBar />
            <Header />
            <FloatButton />
        </Conteiner>
    )
}