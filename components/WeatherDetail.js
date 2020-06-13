import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function WeatherDetail({temp, condition}) {
return(
    <View style={Styles.contaier}> 
        <Text>{temp}</Text>
        <Text>{condition}</Text>
    </View>
)
}

const Styles = StyleSheet.create({
    contaier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,

    // condition: PropTypes.oneOf([
    //     "", "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"
    // ]).isRequired
}