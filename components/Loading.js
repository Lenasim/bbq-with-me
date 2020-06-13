import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BBQ with me</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#A3CB38",
    },
    text: {
        color: "#dff9fb",
        fontSize: 30,
        textAlign: "center",
    }
})