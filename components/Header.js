/**
 * Header.js
 * 
 * Date: Febuary 20, 2020
 * Description: Show the display of the app
 * Author: Michael Chang
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

// Default title for Header
Header.defaultProps = {
    title: "Workout List",
}

// Style
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue' 
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
})

export default Header