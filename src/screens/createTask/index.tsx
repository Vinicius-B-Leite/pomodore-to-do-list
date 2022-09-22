import { addDoc } from 'firebase/firestore'
import { useState, useContext } from 'react'
import React, { View, StatusBar, FlatList, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { useTheme } from 'styled-components'
import FloatButton from '../../components/floatButton'
import { AdmTarefaContext } from '../../contexts/AdmTarefaContext'
import { colecaoTarefas } from '../../firebase/firebase'
import { BotaoTempoTrabalho, BotaoTempoTrabalhoAtivo, Conteiner, ConteinerInput, ConteinerPomodoroConfig, ConteinerTexto, Input, OpcoesPomodoroConfig, Texto, TextoBotaoTempoTrabalho, TituloPomodoroConfig } from './styles'

export default function CreateTask() {

    const TempoTrabalho = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
    const theme = useTheme()
    const [tempoTrabalho, setTempoTrabalho] = useState<number>(25)
    const [tempoDescanso, setTempoDescanso] = useState<number>(5)
    const [descricaoTarefa, setDescricaoTarefa] = useState<string>('')
    const {setAdicionouTarefa} = useContext(AdmTarefaContext)

    const adicionarTarefa = async () => {
        await addDoc(colecaoTarefas, {
            descricao: descricaoTarefa,
            status: 'andamento',
            tempoDescanso: tempoDescanso,
            tempoFoco: tempoTrabalho
        })
        setDescricaoTarefa("")
        setAdicionouTarefa(true)
        ToastAndroid.show("Adicionado com sucesso", ToastAndroid.SHORT)
    }
    return (
        <Conteiner>
            <StatusBar />
            <ConteinerInput>
                <Input
                    placeholder='Tarefa...'
                    placeholderTextColor={theme.text}
                    value={descricaoTarefa}
                    onChangeText={setDescricaoTarefa}
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
                            style={{ height: 40 }}
                            data={TempoTrabalho}
                            renderItem={item => {
                                return item.item == tempoTrabalho ?
                                    (
                                        <BotaoTempoTrabalhoAtivo>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalhoAtivo>
                                    )
                                    :
                                    (
                                        <BotaoTempoTrabalho onPress={() => setTempoTrabalho(item.item)}>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalho>
                                    )
                            }
                            }
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
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
                                return item.item == tempoDescanso ?
                                    (
                                        <BotaoTempoTrabalhoAtivo>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalhoAtivo>
                                    )
                                    :
                                    (
                                        <BotaoTempoTrabalho onPress={() => setTempoDescanso(item.item)}>
                                            <TextoBotaoTempoTrabalho>{item.item}</TextoBotaoTempoTrabalho>
                                        </BotaoTempoTrabalho>
                                    )
                            }
                            }
                            keyExtractor={item => item.toString()}

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </OpcoesPomodoroConfig>
            </ConteinerPomodoroConfig>
            <FloatButton funcao={() => adicionarTarefa()} adicionar={false} />
        </Conteiner>
    )
}