import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, Button, TextInput, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js';
import config from '../../config';

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

  render() {
    return (
      <ScrollView style={styles.outerscrollview}>
          <View style={styles.outerview}>
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
                      <Text style={styles.linksignup}>Sign Up </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={ this.showLoginSetSate } >
                      <Text style={styles.linklogin}> Login</Text>
                    </TouchableOpacity>
              
                </View>

                <View style={{margin:"5%"}} />
    
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
                
                
                <View style={{margin:"30%"}} />

                <View>
                {
                  this.state.showLogin ? <Button onPress = { this.FunctionToOpenSecondActivity } title="Create Account"  />: <Button onPress = { this.FunctionToOpenSecondActivity } title="Login"  />
                }
                </View>

                <View style={{margin:"2%"}} />

                <View>
                  <Text style={{fontSize: 12}}>By signing up agree to our terms of service and privacy policy</Text>
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