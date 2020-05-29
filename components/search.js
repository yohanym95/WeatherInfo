/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {TextInput, Button, Card} from 'react-native-paper'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './header'

const Search = ({navigation}) => {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])

  const fetchCities = text => {
    setCity(text)
    fetch(`https://autocomplete.wunderground.com/aq?query=${text}`)
      .then(item => item.json())
      .then(cityData => {
        setCities(cityData.RESULTS.slice(0, 9))
      })
  }

  const btnClick = () => {
    navigation.navigate('home', {city: city})
  }

  const listClick = name => {
    setCity(name)
    navigation.navigate('home', {city: name})
  }
  return (
    <View>
      <Header name='Search Screen' />
      <TextInput
        label='City Name'
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={text => fetchCities(text)}
      />
      <Button
        icon='content-save'
        mode='contained'
        theme={{colors: {primary: '#00aaff'}}}
        style={styles.button}
        onPress={() => btnClick()}>
        <Text style={styles.text}>Save Changes</Text>
      </Button>
      <FlatList
        data={cities}
        renderItem={({item}) => {
          return (
            <Card style={styles.card} onPress={() => listClick(item.name)}>
              <Text> {item.name}</Text>
            </Card>
          )
        }}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
  text: {
    color: 'white',
  },
  card: {
    margin: 2,
    padding: 12,
  },
})

export default Search
