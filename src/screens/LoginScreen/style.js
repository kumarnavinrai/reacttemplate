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
    backgroundColor:'#3E46AB',
    flex: 1
  },
  firstinner: {
    flex: 1
  },
  secondinner: {
    flex: 2
  },
  thirdinner: {
    flex: 3
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
   btnwrap: {
    width: 340,  
    height: 80
  },
  submitstart:{
    marginRight:30,
    marginLeft:30,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#0AE88B',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitstart:{
    marginRight:30,
    marginLeft:30,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#0AE88B',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3E46AB',
  },
  SubmitButtonStyle: {
 
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#0AE88B',
    borderRadius:25,
    borderWidth: 0,
    borderColor: '#fff'
  },
  LoginSubmitButtonStyle: {
 
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#0CB3FF',
    borderRadius:25,
    borderWidth: 0,
    borderColor: '#fff'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  signupbtn:{
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#0AE88B',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitstartText:{
      color:'#fff',
      textAlign:'center',
  },
  BottomTextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  link: {
    color: '#255899'
  }
});