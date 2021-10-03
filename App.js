import React, { Component } from 'react'
import { AppState, Text, View } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Transaction from './screens/Transaction'
import Search from './screens/Search'

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

var TabNavigation= createBottomTabNavigator({
  Transaction:Transaction,
  Search:Search
},
{
  tabBarOptions:{
          activeTintColor:"blue",
          inactiveTintColor:'darkgray',
          style:{backgroundColor:"gray"}
  }
}
)

const AppContainer = createAppContainer(TabNavigation)