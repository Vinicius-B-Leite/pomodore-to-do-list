import { useState } from 'react'
import React, { Text, View, TextInput, StatusBar, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import FloatButton from '../../components/floatButton'
import { BotaoTempoTrabalho, BotaoTempoTrabalhoAtivo, Conteiner, ConteinerInput, ConteinerPomodoroConfig, ConteinerTexto, Input, OpcoesPomodoroConfig, Texto, TextoBotaoTempoTrabalho, TituloPomodoroConfig } from './styles'

export default function CreateTask() {

    const TempoTrabalho = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
    const theme = useTheme()
    const [tempoTrabalho, setTempoTrabalho] = useState<number>(25)
    const [tempoDescanso, setTempoDescanso] = useState<number>(5)
    return (
        <Conteiner>
            <StatusBar />
            <ConteinerInput>
                <Input
                    placeholder='Tarefa...'
                    placeholderTextColor={theme.text}
                />
            </ConteinerInput>

            <ConteinerPomodoroConfig>
                <TituloPomodoroConfig>Pomodoro Config</TituloPomodoroConfig>
                <OpcoesPomodoroConfig>
                    <View>
                        <ConteinerTexto>
                            <Texto>Tempo de foco</Texto>
                            <Texto>minu</Texto>
                        </ConteinerTexto>
                        <FlatList
                            data={TempoTrabalho}
                            renderItem={item => {
                                return item.index == tempoTrabalho ?
                                    (
                                        <BotaoTempoTrabalhoAtivo>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalhoAtivo>
                                    )
                                    :
                                    (
                                        <BotaoTempoTrabalho onPress={() => setTempoTrabalho(item.index)}>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalho>
                                    )
                            }
                            }
                            ItemSeparatorComponent={(props) => <View style={{ width: '5%' }}></View>}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            initialScrollIndex={25}
                        />
                    </View>
                    <View>
                        <ConteinerTexto>
                            <Texto>Tempo de descanso</Texto>
                            <Texto>minu</Texto>
                        </ConteinerTexto>
                        <FlatList
                            data={TempoTrabalho}
                            renderItem={item => {
                                return item.index == tempoTrabalho ?
                                    (
                                        <BotaoTempoTrabalhoAtivo>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalhoAtivo>
                                    )
                                    :
                                    (
                                        <BotaoTempoTrabalho onPress={() => setTempoDescanso(item.index)}>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalho>
                                    )
                            }
                            }
                            ItemSeparatorComponent={(props) => <View style={{ width: '5%' }}></View>}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </OpcoesPomodoroConfig>
            </ConteinerPomodoroConfig>
            <FloatButton funcao={() => { }} adicionar={false} />
        </Conteiner>
    )
}