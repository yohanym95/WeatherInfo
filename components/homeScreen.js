/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
import {TextInput, Button, Card, Title} from 'react-native-paper'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import Header from './header'

const HomeScreen = props => {
  const [info, setInfo] = useState({
    name: 'loading!',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading',
    // eslint-disable-next-line semi
  })

  useEffect(() => {
    getWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getWeather = () => {
    let weatherCity
    const {city} = props.route.params
    weatherCity = city
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&APPID=b7fcbb72cd79d602a091d947d13b46ed&units=metric`,
    )
      .then(data => data.json())
      .then(results => {
        setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        })
      })
  }

  if (props.route.params.city !== 'london') {
    getWeather()
  }

  return (
    <>
      <View>
        <Header name='Weather Info' />
        <View style={styles.titleView}>
          <Title style={styles.title}>{info.name}</Title>
          <Image
            style={styles.image}
            source={{uri: `https://openweathermap.org/img/w/${info.icon}.png`}}
          />
        </View>

        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Temperature - {info.temp}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Humidity - {info.humidity}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Description - {info.desc}</Title>
        </Card>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  titleView: {
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    color: '#00aaff',
    fontSize: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  card: {
    margin: 5,
    padding: 12,
  },
  cardTitle: {
    color: '#00aaff',
  },
})

export default HomeScreen
