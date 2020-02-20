/**
 * ListItem.js
 * 
 * Date: Febuary 20, 2020
 * Description: Run the feature where user can remove the element from the list
 * Author: Michael Chang
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.listItemView}>
    <Text style={styles.listItemText}>{item.text}</Text>
    <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
          </View>
        </TouchableOpacity>
    )
}

// Style
const styles = StyleSheet.create({  
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    }
})

export default ListItem