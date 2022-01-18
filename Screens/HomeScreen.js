import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react'
import { Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import { styles } from '../styles';
import {percentage,sin,Asin,Cos,Acos,Tan,Atan,Pi,Sqrt,Cuberoot,Square,Cube,Cubefour} from '../data/myfunctions'
import { NavigationContainer } from '@react-navigation/native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


{/* my reducer actions */}
export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    DELETE_INPUT: "delete-input",
    EVALUATE: "evaluate",
    CHOOSE_OPERATION: "choose-operation",
    PERCENTAGE: "percentage",
    SIN: "sin",
    ASIN: "asin",
    PI: "pi",
    COS: "cos",
    ACOS: "acos",
    TAN: "tan",
    ATAN: "atan",
    SQRT: "sqrt",
    SQUARE: "squared",
    SQUARECUBE: "squarecube",
    SQUAREFOUR: "squarefour",
    CUBEROOT: "cuberoot"
  }

{/* my reducer actions end*/}

{/* my reducer functions */}
   
function reducer(state, {type, payload}){
  // eslint-disable-next-line 
  //x = position
    switch(type){
       case ACTIONS.ADD_DIGIT:
         if(state.overwrite){
           return {
             ...state,
             current: payload.digit,
             overwrite: false
           }

         }
         if(payload.digit === "0" && state.current === "0"){
          return state
         } 
         if(payload.digit === "." && state.current.includes(".")){
           return state
          }
         if(payload.digit === "-" && state.current !== null && state.current ){
           return {
             ...state,
             current: "-" + state.current
           }
          }
          
         if(state.current == null && payload.digit === "-" ){
           return {
             current: payload.digit
           }
          }
         return {
           ...state,
           current: `${state.current || ""}${payload.digit}`,
         }
         case ACTIONS.CHOOSE_OPERATION:
           if(state.current == null && state.previous == null){
             return state
           }
           if(payload.operation === "%" && state.previous == null){
              return{
                previous: percentage(state.current),
                current: null,
                operation: null
              }
           }
           

           if(state.previous == null) {
             return {
               operation: payload.operation,
               previous: state.current,
               current: null
              }
           }
           return{
             ...state,
             previous: evaluate(state),
             operation: payload.operation,
             current: null
           }
           case ACTIONS.DELETE_DIGIT: 
           let len = state.current.length
           //const x = position
           if(state.overwrite){
             return{
               ...state,
               overwrite: false,
               current: null,
             }
           }
           if(state.current == null) return state
           if(state.current.length === 1){
             return{
               ...state,
               current: null
             }
           }
           if(state.overwrite){
            return{
              ...state,
              overwrite: false,
              current: null,
            }
          }
          if(!state.overwrite){
            return {
              ...state,
              current: state.current.slice(0,-1)
            }
          }
          //let x = position
          if(state.current == null) return state
          if(x >= 0 && x < len){
            return {
              ...state,
             current: state.current.slice(0, `${x}`- len -1) + state.current.substr(`${x}`- len)

            }
          }
          if(x >= len){
            //let x = position;
            //console.log(x)
            return {
              ...state,
             current: state.current.slice(0, `${x}`- len -1)

            }
          }
           
          case ACTIONS.DELETE_INPUT: 
          //x = false;
             if(state.overwrite){
               return{
                 ...state,
                 overwrite: false,
                 current: null,
               }
             }
             if(state.current == null) return state
             if(x >= 0 && x < len){
               return {
                 ...state,
                current: state.current.slice(0, `${x}`- len -1) + state.current.substr(`${x}`- len)

               }
             }
             if(x >= len){
               return {
                 ...state,
                current: state.current.slice(0, `${x}`- len -1)

               }
             }
    
           

             
          case ACTIONS.CLEAR:
             return {}
          case ACTIONS.EVALUATE:
             if(state.operation == null || state.previous == null || state.current == null){
               return state
             }
             return {
               ...state,
               previous: null,
               overwrite: true,
               operation: null,
               current: evaluate(state)
             }
             case ACTIONS.PERCENTAGE:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: percentage(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SIN:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: sin(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ASIN:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Asin(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.PI:
              return {
                ...state,
                current: Pi(1),
                overwrite: true,
                previous: state.previous
              }
             case ACTIONS.COS:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Cos(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ACOS:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Acos(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.TAN:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Tan(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.ATAN:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Atan(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQRT:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Sqrt(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUARE:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Square(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUARECUBE:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Cube(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.SQUAREFOUR:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Cubefour(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
             case ACTIONS.CUBEROOT:
              if(state.current == null || state.previous == null){
                return{
                  current: ""
                }
              }
              return {
                ...state,
                current: Cuberoot(state.current),
                overwrite: true,
                operation: null,
                previous: null
              }
            
    }
}

{/* my reducer functions end*/}

function evaluate({previous, current, operation}){
  const prev = parseFloat(previous)
  const curr = parseFloat(current)
  if(isNaN(prev) || isNaN(curr)) return ""
  let computation = ""
  switch(operation){
    case "+":
      computation = prev + curr
      break
     case "−":
      computation = prev - curr
      break
     case "÷":
       computation = prev / curr
      break
      case "×":
       computation = prev * curr
       break
       default:
  }
  return computation.toLocaleString()

}

function EvaluateButton({dispatch}) {
  return (
      <TouchableOpacity onPress={() => dispatch({type: ACTIONS.EVALUATE})} activeOpacity={0.8}>
        <View style={styles.evabtn}>
           <Text style={styles.evabtntext}>=</Text>
        </View>
      </TouchableOpacity>
  )
}


function NumButton({dispatch,digit}) {
  return (
      <TouchableOpacity onPress={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})} activeOpacity={0.8}>
        <View style={styles.numbtn}>
           <Text style={styles.numbtntext}>{digit}</Text>
        </View>
      </TouchableOpacity>
  )
}
function ActionButton({dispatch, operation}) {
  return (
          <TouchableOpacity onPress={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})} activeOpacity={0.8}>
              <View style={{height: 90}}>
                  <View style={styles.actionbtn}>
                      <Text style={styles.actionbtntext}>{operation}</Text>
                  </View>
              </View>
          </TouchableOpacity>
  )
}

function Minus({dispatch, digit}){
  return (
  <TouchableOpacity onPress={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})} activeOpacity={0.8}>
      <View style={styles.functionbtn} >
        <Text style={styles.minusbtntext}>{digit}</Text>
      </View>
  </TouchableOpacity>
  )}

function FunctionButton({dispatch}) {
  return (
     <View style={{height: '100%',justifyContent: 'space-between', width: '100%'}}>
         <View style={{display: 'flex', flexDirection: 'row', width: '100%',justifyContent: 'space-around'}}>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.CLEAR})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}>AC</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.DELETE_DIGIT})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}>DEL</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.SIN})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}>SIN</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.COS})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}>COS</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.TAN})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}>TAN</Text>
                </View>
             </TouchableOpacity>
             
          </View>
         <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.SQRT})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>&#8730;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.CUBEROOT})} activeOpacity={0.8}>
                <View style={styles.functionbtn}>
                   <Text style={styles.functionbtntext}><>&#8731;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.PERCENTAGE})} activeOpacity={0.8}>
                <View style={styles.functionbtn}>
                   <Text style={styles.functionbtntext}>%</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.SQUARE})} activeOpacity={0.8}>
                <View style={styles.functionbtn}>
                   <Text style={styles.functionbtntext}><>x&#178;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.SQUARECUBE})} activeOpacity={0.8}>
                <View style={styles.functionbtn}>
                   <Text style={styles.functionbtntext}><>x&#179;</></Text>
                </View>
             </TouchableOpacity>
          </View>
         <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
             {/*<TouchableOpacity onPress={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>x&#8308;</></Text>
                </View>
             </TouchableOpacity>*/}
             <Minus digit={'-'} dispatch={dispatch}/>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.ASIN})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>sin&#8315;&#185;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.ACOS})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>cos&#8315;&#185;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.ATAN})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>tan&#8315;&#185;</></Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => dispatch({type: ACTIONS.PI})} activeOpacity={0.8}>
                <View style={styles.functionbtn} >
                   <Text style={styles.functionbtntext}><>&#x3C0;</></Text>
                </View>
             </TouchableOpacity>
             
          </View>
          
       </View>   
  )
}




export default function HomeScreen({navigation}) {
  function move(){
    navigation.navigate('formulars')
  }
  const [{previous, current, operation},dispatch]  = useReducer(reducer, {})
  return (
      <View style={styles.container}>
        <StatusBar 
                style='light'
                animated={true}
                translucent={true}
                barStyle='white' backgroundColor='#721a42'
        />
        <View style={styles.appcontainer}>
          <View style={styles.output}>
            <TouchableWithoutFeedback onPress={move}>
              <View style={{alignItems: 'flex-start', backgroundColor: '#721a42',marginLeft:6, width: '25%', borderRadius: 20, alignItems: 'center'}}>
                <Text style={{color: 'white', paddingVertical: 5, paddingHorizontal: 5, fontSize: 16}}>Formulars</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.previous}>{previous} {operation}</Text>
              <Text style={styles.current}>{current}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.calcbuttons}>
              <View style={styles.arithmetic}>
                <FunctionButton dispatch={dispatch}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.numbers}>
            <View style={styles.calcbox1}>
              <View style={{justifyContent: 'space-between', height: '100%'}}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                  <NumButton digit={7} dispatch={dispatch}/>
                  <NumButton digit={8} dispatch={dispatch}/>
                  <NumButton digit={9} dispatch={dispatch}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                  <NumButton digit={4} dispatch={dispatch}/>
                  <NumButton digit={5} dispatch={dispatch}/>
                  <NumButton digit={6} dispatch={dispatch}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                  <NumButton digit={1} dispatch={dispatch}/>
                  <NumButton digit={2} dispatch={dispatch}/>
                  <NumButton digit={3} dispatch={dispatch}/>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginBottom: 15}}>
                  <NumButton digit={'.'} dispatch={dispatch}/>
                  <NumButton digit={0} dispatch={dispatch}/>
                  <EvaluateButton dispatch={dispatch}/>
                </View>
              </View>
            </View>
            <View style={styles.calcbox2}>
              <View style={{justifyContent: 'space-between', height: '97%'}}>
               <ActionButton operation='−' dispatch={dispatch}/>
               <ActionButton operation= '+' dispatch={dispatch}/>
               <ActionButton operation='&#247;' dispatch={dispatch}/>
               <ActionButton operation='&#215;' dispatch={dispatch}/>
              </View>
            </View>
          </View>
        </View>
      </View>
   
  );
}

