import { useState, useEffect, useRef, useContext } from 'react'
import React from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ITarefa } from '../../types/ITarefa'
import Header from './header'
import { BotaoNormal, BotaoVazado, Conteiner, ConteinerBotoes, ConteinerCronometro, TextoBotaoNormal, TextoBotaoVazado } from './styles'
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTheme } from 'styled-components'
import { ProgressRef } from 'react-native-circular-progress-indicator';
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { AdmTarefaContext } from '../../contexts/AdmTarefaContext'




export default function Pomodoro() {
    const route: RouteProp<{ tarefa: { tarefa: ITarefa } }> = useRoute()
    const tarefa = route.params.tarefa
    const navigation = useNavigation()
    const theme = useTheme()
    const {setConcluiuTarefa} = useContext(AdmTarefaContext)

    const [tempo, setTempo] = useState<number>(tarefa.tempoFoco)
    const [minutos, setMinutos] = useState(tempo)
    const [segundos, setSegundos] = useState<number>(0)

    const progressRef = useRef<ProgressRef>(null)

    const [pause, setPause] = useState(false)

    const [subtitle, setSubtitle] = useState('Foco')

    const [estaNoFoco, setEstaNoFoco] = useState(true)


    const calcularSegundos = (minutos: number) => {
        let segundos = minutos * 60
        return segundos
    }
    const calcularMilissegundos = (minutos: number) => {
        let milissegunddos = calcularSegundos(minutos) * 1000
        return milissegunddos
    }
    const pausar = () => {
        if (pause) {
            setPause(false)
            setSegundos(segundos - 1)
            progressRef.current?.play()
            return
        }
        setPause(true)
        progressRef.current?.pause()
    }
    const concluir = async () => {
        setSubtitle('Concluído')
        if (tarefa.id) {
            let document = doc(db, 'tarefa', tarefa.id)

            await updateDoc(document, {status: 'concluido'})
            setConcluiuTarefa(true)
            navigation.goBack()
        }

    }
    const trocarTipoTempo = () => {
        setTempo(estaNoFoco ? tarefa.tempoDescanso : tarefa.tempoFoco)
        setMinutos(estaNoFoco ? tarefa.tempoDescanso : tarefa.tempoFoco)
        setSegundos(0)
        setSubtitle(estaNoFoco ? 'Descanso' : 'Foco')
        setEstaNoFoco(false)
        progressRef.current?.reAnimate()
        pausar()
    }
    useEffect(() => {
        setTimeout(() => {
            if (!pause) {

                if (segundos === 0) {
                    setMinutos(m => m - 1)
                    setSegundos(59)
                    return
                }
                setSegundos(segundos - 1)
            }
        }, 850)//compensar o delay

    }, [segundos])
    return (
        <Conteiner>

            <Header tarefa={tarefa} />

            <ConteinerCronometro>
                <CircularProgress
                    ref={progressRef}

                    value={0}
                    maxValue={calcularSegundos(tempo)}

                    radius={170}

                    initialValue={calcularSegundos(tempo)}
                    duration={calcularMilissegundos(tempo)}

                    title={`${minutos}:${segundos}`}
                    titleFontSize={60}
                    subtitle={subtitle}
                    subtitleFontSize={23}

                    inActiveStrokeColor={theme.destaque}
                    activeStrokeColor={theme.destaque}
                    inActiveStrokeOpacity={0.4}
                    showProgressValue={false}
                    onAnimationComplete={() => trocarTipoTempo()}
                />
            </ConteinerCronometro>


            <ConteinerBotoes>

                <BotaoVazado onPress={() => pausar()}>
                    <TextoBotaoVazado>Pause</TextoBotaoVazado>
                </BotaoVazado>

                <BotaoNormal onPress={() => concluir()}>
                    <TextoBotaoNormal>Concluir</TextoBotaoNormal>
                </BotaoNormal>

            </ConteinerBotoes>

        </Conteiner>
    )
}