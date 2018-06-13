import {Dimensions, StyleSheet} from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesignup: {
    fontSize: 29,
    fontWeight: 'bold',
    color: "#ffffff"
  },
  signupandlogintext: {
    width: 200,
    flexDirection: 'row'
  },
  signupbtn: {
    width: 100
  },
  loginbtn: {
    width: 100
  },
  description: {
    marginTop: 10,
    textAlign: 'justify'
  },
  outerview: {
    backgroundColor:'#3E46AB'
  },
  outerscrollview: {
    backgroundColor:'#3E46AB',
    padding: 20
  },
  info: {
    flex: 1,
    marginTop: 7,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  author: {
    flex: 1,
    marginTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 35
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 13
  },
  name: {
    fontWeight: 'bold'
  },
  banner: {
    flex: 1,
    maxHeight: 300,
    height: 300,
    width
  },
  linklogin: {
    color: '#ffffff',
    fontSize: 15
  },
  linksignup: {
    color: '#ffffff',
    fontSize: 15
  },
  link: {
    color: '#255899'
  }
});