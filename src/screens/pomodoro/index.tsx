import { RouteProp, useRoute } from '@react-navigation/native'
import React, { Text, View, TouchableOpacity } from 'react-native'
import { ITarefa } from '../../types/ITarefa'
import Header from './header'
import { BotaoNormal, BotaoVazado, Conteiner, ConteinerBotoes, ConteinerCronometro, TextoBotaoNormal, TextoBotaoVazado } from './styles'
import CircularProgress from 'react-native-circular-progress-indicator';
import { useTheme } from 'styled-components'



export default function Pomodoro() {
    const route: RouteProp<{ tarefa: ITarefa }> = useRoute()
    const tarefa = route.params

    const theme = useTheme()
    return (
        <Conteiner>

            <Header tarefa={tarefa} />

            <ConteinerCronometro>
                <CircularProgress
                    value={50}
                    radius={140}
                    maxValue={1000}
                    initialValue={100}
                    duration={100}
                    valueSuffix={'s'}
                    inActiveStrokeColor={theme.destaque}
                    activeStrokeColor={theme.destaque}
                    inActiveStrokeOpacity={0.4}
                    progressValueColor={theme.destaque}
                    onAnimationComplete={() => console.log("foi")}
                />
            </ConteinerCronometro>


            <ConteinerBotoes>

                <BotaoVazado>
                    <TextoBotaoVazado>Parar</TextoBotaoVazado>
                </BotaoVazado>

                <BotaoNormal>
                    <TextoBotaoNormal>Concluir</TextoBotaoNormal>
                </BotaoNormal>

            </ConteinerBotoes>

        </Conteiner>
    )
}