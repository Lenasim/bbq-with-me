import React from 'react'
import { Alert } from "react-native";
import axios from 'axios'
import * as Location from 'expo-location'
import Loading from './Loading'


const API_KEY = "821f07c1a9e2948b18b4269a36323df1"

export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [temp, setTemp] = useState(0)
  const [condition, setCondition] = useState("")

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      // console.log(latitude, longitude)
      getWeather(latitude, longitude)
    } catch (err) {
      Alert.alert("Can't find you.", "So sad")
    }
  }

  const getWeather = async (latitude, longitude) => {
    const { data: {list} } = await axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setIsLoading(false)
    console.log(list[0])
    setTemp(list[0].main.temp)
    setCondition(list[0].weather[0].main)
  }


  useEffect(() => {
    getLocation()
  }, [])

  return isLoading ? <Loading /> : <WeatherDetail temp={Math.round(temp)} condition={condition}/>

}

