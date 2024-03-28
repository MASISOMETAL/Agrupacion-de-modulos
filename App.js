import { StyleSheet, View } from 'react-native'
import React from 'react'
// import Screen1 from './src/screens/Screen1'
// import Screen2 from './src/screens/Screen2'
// import Screen3 from './src/screens/Screen3'
// import Screen4 from './src/screens/Screen4'
import {Screen1, Screen2, Screen3, Pantalla4} from "./src/screens"

const App = () => {
	return (
		<View>
			<Screen1 />
			<Screen2 />
			<Screen3 />
			<Pantalla4 />
		</View>
	)
}

export default App

const styles = StyleSheet.create({})