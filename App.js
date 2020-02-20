/**
 * React Native Workout List App
 * 
 * App.js
 * Description: This is where everything happens
 *
 * Author: Michael Chang
 * Date: Febuary 20, 2020
 */

import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import {uuid} from 'uuidv4'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Flat Barbell Bench Press'},
    {id: uuid(), text: 'Close-Grip Bench Press'},
    {id: uuid(), text: 'Standing Military Press'},
    {id: uuid(), text: 'Cable Crunch'},
  ])

  // const deleteItem = ()
  function deleteItem(id)
  {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  function addItem(text)
  {
    // Check if the input is empty, so it'll throw an error
    if (!text)
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    else
    {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Workout List"/>
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60
  },
})

export default App