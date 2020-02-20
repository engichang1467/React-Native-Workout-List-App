/**
 * AddItem.js
 * 
 * Date: Febuary 20, 2020
 * Description: allow the app to add users input onto the app
 * Author: Michael Chang
 */
import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({ title, addItem }) => {
    const [text, setText] = useState('')

    function onChange(textValue) {
        setText(textValue)
    }

    return (
        <View>
            <TextInput placeholder="Add a workout exercise..." style={styles.input}
                onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                    
                <Icon name="plus" size={20} /> Add Exercise
                </Text>
            </TouchableOpacity>
        </View>
    )
}

// Style
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8, 
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default AddItem