import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, Button, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js';
import config from '../../config';


class LandingView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {},
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
      this.props.navigation.navigate('LoginScreen');
      
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.landingp}>
            <View style={styles.dareyouwarp}>  
              <View style={styles.dareyoutext}>
                  <Text style={styles.darename}>DARE</Text>
              </View>
              <View style={styles.youtext}>
                  <Text style={styles.darename}>YOU</Text>
              </View>
            </View>  
            <View style={styles.midtextwarp}>
              <View style={styles.areyouup}>
                  <Text style={styles.areyouname}>Are you up for</Text>
              </View>
              <View style={styles.thec}>
                  <Text style={styles.thecname}>the challenge?</Text>
              </View>
            </View>  
            <View style={styles.btnwrap}>
                <TouchableHighlight
                  style={styles.submitstart}
                  onPress={() => this.FunctionToOpenSecondActivity(this.props)}
                  underlayColor='#fff'>
                    <Text style={styles.submitstartText}>Start</Text>
                </TouchableHighlight>
            </View>
        </View>
      </ScrollView>
    );
  }

}

LandingView.propTypes = {
  getInfo: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  conference: PropTypes.object.isRequired
};

export default LandingView;