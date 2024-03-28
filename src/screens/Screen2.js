import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Componente4, Componente5 } from '../components'
// import Componente4 from '../components/Componente4'
// import Componente5 from '../components/Componente5'


const Screen2 = () => {
    return (
        <View>
            <Text>Screen2</Text>
            <Componente4 />
            <Componente5 />
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({})