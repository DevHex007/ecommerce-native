import { View, Text } from 'react-native'
import React from 'react'
import {
    TextButton
}from '../../components'

const Home = ({navigation}) => {
  return (
    <View 
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
      <TextButton
        label='Scan'  
        onPress={() => navigation.navigate('ScanProduct')}
      />
    </View>
  )
}

export default Home;