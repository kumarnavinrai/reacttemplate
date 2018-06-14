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
  description: {
    marginTop: 10,
    textAlign: 'justify'
  },
  info: {
    flex: 1,
    marginTop: 7,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  landingp: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dareyoutext: {
    width: 350, 
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  },
   youtext: {
    width: 350, 
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  darename: {
    color: "#dfdfdf",
    textAlign: 'center',
    fontSize: 80, 
    fontWeight: "900"
  },
  areyouname: {
    color: "#dfdfdf",
    textAlign: 'center',
    fontSize: 18
  },
  thecname: {
    color: "#dfdfdf",
    textAlign: 'center',
    fontSize: 18
  },
  areyouup: {
    width: 350,  
    height: 25, 
    backgroundColor: 'skyblue'
  },
  thec: {
    width: 350,  
    height: 25,
    backgroundColor: 'steelblue'
  },
  dareyouwarp: {
    flex: 1
  },
  midtextwarp: {
    flex: 2
  },
  btnwrap: {
    flex: 3,
    width: 350,  
    height: 80,
    backgroundColor: 'skyblue'
  },
  submitstart:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitstartText:{
      color:'#fff',
      textAlign:'center',
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
  link: {
    color: '#255899'
  }
});