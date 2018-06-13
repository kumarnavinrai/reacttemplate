import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LocationScreen, AboutScreen, SpeakersScreen, ScheduleScreen, LandingScreen, LoginScreen }  from '../screens';
import { Header } from '../components';
import config from '../config';

export default StackNavigator({
  Main: {
        screen: LandingScreen,
        navigationOptions: (props) => ({
            title: "",
            header: null
        })
  },
  LoginScreen: {
        screen: LoginScreen,
        navigationOptions: (props) => ({
            title: "",
        })
  },
  TabScreen: {
    screen: TabNavigator (
      {
        Schedule: {
          name: 'Schedule',
          screen: ScheduleScreen,
        },
        Speakers: {
          name: 'Speakers',
          screen: SpeakersScreen,
        },
        Map: {
          name: 'Map',
          screen: LocationScreen,
        }
      },
      {
        initialRouteName: 'Schedule',
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
            if (routeName === 'Schedule') {
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
          activeTintColor: config.SECONDARY_BG_COLOR,
          inactiveTintColor: config.PRIMARY_TEXT_COLOR,
          activeBackgroundColor: config.PRIMARY_BG_COLOR,
          inactiveBackgroundColor: config.PRIMARY_BG_COLOR
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      }
    ),
    navigationOptions: { headerTitle: <Header/>}
  }
})
