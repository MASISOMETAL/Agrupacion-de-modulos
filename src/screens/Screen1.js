import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Componente1 from '../components/Componente1'
// import Componente2 from '../components/Componente2'
// import Componente3 from '../components/Componente3'
import { Componente1, Componente2, Componente3 } from "../components"

const Screen1 = () => {
    return (
        <View>
            <Text>Screen1</Text>
            <Componente1 />
            <Componente2 />
            <Componente3 />
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({})