import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Componente6 from '../components/Componente6'
// import Componente7 from '../components/Componente7'
import { Componente6, Componente7 } from '../components'

const Screen3 = () => {
    return (
        <View>
            <Text>Screen3</Text>
            <Componente6 />
            <Componente7 />
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({})