import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js';
import config from '../../config';
import renderIf from '../../config/renderIf';

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {},
      showLogin: true,
    };
  }

  componentDidMount() {
    const { getInfo } = this.props;
    getInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        conference: nextProps.conference,
        error: nextProps.error,
        completed: nextProps.completed
      });
    }
  }

  FunctionToOpenSecondActivity = () =>
  {
      const LOGIN_KEY = 'LOGIN_KEY';
      AsyncStorage.setItem(LOGIN_KEY, "yes");
      this.props.navigation.navigate('TabScreen');
      
  }

  showLoginSetSate = () =>
  {
    this.setState({showLogin: false})  
  }

  showSignUpSetSate = () =>
  {
    this.setState({showLogin: true})      
  }

  loginStyle = function() {

    if(!this.state.showLogin)
    {
      return {
        color: '#ffffff',
        fontSize: 15,
        textDecorationLine: 'underline'
      }
    }else{
      return {
        color: '#ffffff',
        fontSize: 15
      }
    } 

   }

   signUpStyle = function() {

    if(this.state.showLogin)
    {
      return {
        color: '#ffffff',
        fontSize: 15,
        textDecorationLine: 'underline'
      }
    }else{
      return {
        color: '#ffffff',
        fontSize: 15
      }
    } 

   }

  render() {
    const signupbtn = (
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={ this.FunctionToOpenSecondActivity }
          >
                <Text style={styles.TextStyle}>Create Account</Text>    
          </TouchableOpacity>
        </View>
    );

    const loginbtn = (
        <View style={styles.MainContainer}>
          <TouchableOpacity
            style={styles.LoginSubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={ this.FunctionToOpenSecondActivity }
          >
                <Text style={styles.TextStyle}>Login</Text>    
          </TouchableOpacity>
        </View>
    );

    return (
      <ScrollView style={styles.outerscrollview}>
          <View style={styles.outerview}>
              <View style={styles.firstinner}>
                <View>
                {
                  this.state.showLogin ? <Text style={styles.titlesignup}>If you dare...</Text> : null
                }
                </View>
                <View>
                {
                  !this.state.showLogin ? <Text style={styles.titlesignup}>Welcome back</Text> : null
                }
                </View>

                <View style={{margin:"5%"}} />

                <View style={styles.signupandlogintext}>

                    <TouchableOpacity onPress={ this.showSignUpSetSate } >
                      <Text style={this.signUpStyle()}>Sign Up </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={ this.showLoginSetSate } >
                      <Text style={this.loginStyle()}> Login</Text>
                    </TouchableOpacity>
              
                </View>
              </View>
              <View style={styles.secondinner} >
    
                    <View>
                    {
                      !this.state.showLogin ? <TextInput placeholder='Username' /> : null
                    }
                    </View>

                    <View>
                    {
                      !this.state.showLogin ? <TextInput placeholder='Password' />  : null
                    }
                    </View>    

               
                
                    <View>
                    {
                      this.state.showLogin ? <TextInput placeholder='Username' />  : null
                    }
                    </View>   
                     
                    <View>
                    {
                      this.state.showLogin ? <TextInput placeholder='Phone Number' />  : null
                    }
                    </View>  
                    
                    <View>
                    {
                      this.state.showLogin ? <TextInput placeholder='Password' />  : null
                    }
                    </View>
              </View>
              <View style={styles.thirdinner} >  
                <View style={{margin:"30%"}} />

                <View>
                {
                  this.state.showLogin ? signupbtn : loginbtn
                }
                </View>
               

                <View style={{margin:"2%"}} />

                <View>
                  <Text style={styles.BottomTextStyle}>By signing up agree to our terms of service and privacy policy</Text>
                </View>
              </View>  
                
          </View>      
      </ScrollView>
      
    );
  }

}

LoginView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default LoginView;