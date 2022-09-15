import React, { View, Text, TouchableHighlight } from 'react-native'
import { ITarefa } from '../../../types/ITarefa'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


type Props = {
    dados: ITarefa
}
export default function Item({ dados }: Props) {

    function Excluir() {
        return (
            <View style={{backgroundColor: 'red', flex: 1}}>
                <Text>Excluir</Text>
            </View>
        )
    }
    return (
        <GestureHandlerRootView>
            <Swipeable renderLeftActions={Excluir} onSwipeableOpen={ () => console.log("HEHEH")}>
                <Text style={{ color: 'white' }}>{dados.descricao}</Text>
            </Swipeable>
        </GestureHandlerRootView>

    )
}