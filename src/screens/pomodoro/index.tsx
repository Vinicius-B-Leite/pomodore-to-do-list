import { useState, useEffect, useRef } from 'react'
import React from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ITarefa } from '../../types/ITarefa'
import Header from './header'
import { BotaoNormal, BotaoVazado, Conteiner, ConteinerBotoes, ConteinerCronometro, TextoBotaoNormal, TextoBotaoVazado } from './styles'
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTheme } from 'styled-components'
import { ProgressRef } from 'react-native-circular-progress-indicator';




export default function Pomodoro() {
    const route: RouteProp<{ tarefa: { tarefa: ITarefa } }> = useRoute()
    const tarefa = route.params.tarefa
    const theme = useTheme()

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
        let milissegunddos = minutos * 60 * 1000
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
    const trocarTipoTempo = () => {
        setTempo(estaNoFoco ? tarefa.tempoDescanso : tarefa.tempoFoco)
        setMinutos(tempo)
        setSegundos(0)
        setEstaNoFoco(false)
        setSubtitle(estaNoFoco ? 'Descanso' : 'Foco')
        pausar()
    }
    useEffect(() => {

        if (!pause) {
            setTimeout(() => {
                if (segundos == 0) {
                    setMinutos(m => m - 1)
                    setSegundos(59)
                    return
                }
                setSegundos(segundos - 1)
            }, 1000)
        }
    }, [segundos])
    return (
        <Conteiner>

            <Header tarefa={tarefa} />

            <ConteinerCronometro>
                <CircularProgress
                    ref={progressRef}

                    value={0}
                    maxValue={calcularSegundos(tempo)}

                    radius={140}

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

                <BotaoNormal>
                    <TextoBotaoNormal>Concluir</TextoBotaoNormal>
                </BotaoNormal>

            </ConteinerBotoes>

        </Conteiner>
    )
}