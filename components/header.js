/* eslint-disable prettier/prettier */
import * as React from 'react'
import {Appbar, Title} from 'react-native-paper'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <Appbar.Header theme={{colors: {primary: '#00aaff'}}} style={styles.header}>
      <Title style={{color: 'white'}}>{props.name}</Title>
    </Appbar.Header>
  )
}

Header.propTypes = {
    name : PropTypes.string
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

export default Header
