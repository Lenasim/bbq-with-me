import React from 'react';
import { View, Button, StyleSheet } from "react-native";



export default function App() {
    return (
        <View style={styles.container}>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
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