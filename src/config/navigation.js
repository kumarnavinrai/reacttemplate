import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LocationScreen, AboutScreen, SpeakersScreen, ScheduleScreen, LandingScreen, LoginScreen, ChallangeScreen }  from '../screens';
import { Header, HeaderLogin, HeaderSch, HeaderAct } from '../components';
import config from '../config';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';

export default StackNavigator({
  Main: {
        screen: LandingScreen,
        navigationOptions: (props) => ({
            title: "",
            headerStyle: { backgroundColor: '#ffffff', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0}, 
shadowOpacity: 0, elevation: 0, shadowColor: 'transparent', color: "#ffffff" },
        })
  },
  LoginScreen: {
        screen: LoginScreen,
        navigationOptions: (props) => ({
            title: "",
            headerStyle: { backgroundColor: '#3E46AB', borderBottomWidth: 0, shadowOffset: {height: 0, width: 0}, 
shadowOpacity: 0, elevation: 0, shadowColor: 'transparent', color: "#ffffff" },
            headerTintColor: '#ffffff'
        })
  },
  TabScreen: {
    screen: TabNavigator (
      {
        Challenge: {
          name: 'Challenge',
          screen: ChallangeScreen,
          navigationOptions: { headerTitle: <HeaderSch/>, headerTintColor: "#ffffff" }
        },
        Speakers: {
          name: 'Speakers',
          screen: SpeakersScreen,
          navigationOptions: { headerTitle: <HeaderAct/>, headerTintColor: "#ffffff", headerStyle: { backgroundColor: '#FF3A65', borderBottomColor: '#FF3A65', borderBottomWidth: 5 } }
        },
        Map: {
          name: 'Map',
          screen: LocationScreen,
          navigationOptions: { headerTitle: <Header/>, headerTintColor: "#ffffff", headerStyle: { backgroundColor: '#2E2E30', borderBottomColor: '#2E2E30', borderBottomWidth: 5 } }
        }
      },
      {
        initialRouteName: 'Challenge',
        navigationOptions: ({ navigation }) => ({
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: config.PRIMARY_BG_COLOR,
            borderBottomColor: config.PRIMARY_BG_COLOR,
            borderBottomWidth: 5
          },
          headerTintColor: config.PRIMARY_TEXT_COLOR, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Challenge') {
              iconName = 'leaf';
            } else if (routeName === 'Speakers') {
              iconName = 'home';
            } else if (routeName === 'Map') {
              iconName = 'user';
            } else if (routeName === 'About') {
              iconName = 'info';
            }

            return <FontAwesome name={iconName} size={25} color={tintColor} />;
          }
        }),
        tabBarOptions: {
          showLabel: false,
          activeTintColor: "#2276D6",
          inactiveTintColor: config.PRIMARY_TEXT_COLOR,
          activeBackgroundColor: "#F5F5F5",
          inactiveBackgroundColor: "#F5F5F5"
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      }
    )
  }
})
