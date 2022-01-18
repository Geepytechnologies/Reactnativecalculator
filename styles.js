import { StyleSheet } from "react-native";
import { StatusBar} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      height: '100%',
      marginTop: StatusBar.currentHeight
    },
    appcontainer: {
      height: '100%'
    },
    numbtn: {
      padding: 8,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
      marginHorizontal: 5
  },
  functionbtn: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal:5,
    marginVertical: 5,
    marginHorizontal: 2,
    borderColor: 'white',
    borderWidth: 1.5,
    backgroundColor: '#721a42',
    //backgroundColor: '#d06805',
    width: 65,
    elevation: 5
 },
 functionbtntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
 },
 minusbtntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
 },
  numbtntext: {
      color:'white',
      fontSize: 30
  },
  actionbtn: {
    padding: 8,
    width: 70,
    minHeight: 50,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 10
},
  evabtn: {
    padding: 8,
    width: 90,
    minHeight: 50,
    alignItems: 'center',
    borderRadius: 20,
    //backgroundColor: '#721a42',
    marginTop: 10
},
evabtntext: {
    //color:'#d06805',
    //color: '#721a42',
    color: 'white',
    fontSize: 40,
    fontWeight: '700'
},
actionbtntext: {
    //color:'#d06805',
    color: '#721a42',
    fontSize: 40,
    fontWeight: '700'
},
    previous: {
      fontSize: 25,
      color: 'white',
      marginBottom: 10,
      textAlign: 'right',
      paddingRight: 5
    },
    current: {
      fontSize: 30,
      color: 'white',
      textAlign: 'right',
      paddingRight: 5
    },
    output: {
      backgroundColor: 'black',
      height: '20%',
      paddingTop: 25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingRight: 10
    },
    calcbuttons: {
      height: '30%',
      borderTopColor: 'white',
      borderBottomColor: 'white',
      borderRadius: 20,
      borderTopWidth: 1,
      borderBottomWidth: 2,
      //backgroundColor: '#e06f06',
      backgroundColor: '#721a42',
      justifyContent: 'center'
      //backgroundColor: '#d06805'
  
    },
    arithmetic: {
      height: '90%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    numbers: {
      display: 'flex',
      flexDirection: 'row',
      height: '50%'
    },
    calcbox1: {
      flex: 3,
      backgroundColor: '#161616',
      height: '100%',
      justifyContent: 'center'
    },
    calcbox2: {
      flex: 1,
      height: '100%',
      backgroundColor: '#202020',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative'
    }
  });