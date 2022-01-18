import React from 'react'
//import { StatusBar } from 'expo-status-bar'
import { StatusBar } from 'react-native'
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native'

export const vw = number => Dimensions.get('window').width * (number / 100);
export const vh = number => Dimensions.get('window').height * (number / 100);

export default function FormulaScreen({navigation}) {
    const round = require('../assets/images/round.png')
    const angle = require('../assets/images/righttriangle.png')
    const elipse = require('../assets/images/elipse.png')
    const rectangle = require('../assets/images/rectangle.png')
    const rhombus = require('../assets/images/rhombus.png')
    const square = require('../assets/images/square.png')
    const trapezoid = require('../assets/images/trapezoid.png')
    const triangle = require('../assets/images/triangle.png')
    const parallelogram = require('../assets/images/parallelogram.png')

    function back(){
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
            <StatusBar 
                animated={true}
                translucent={true}
                barStyle='white' backgroundColor='#721a42'
            />
          <View>
            <TouchableOpacity onPress={back} activeOpacity={0.9}>
                <View style={{backgroundColor:'#721a42', alignItems: 'center', marginVertical: 10, marginLeft: 10, width: '30%', paddingVertical: 5}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Back</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>Some mathematical formulars for your calculations;</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
               <Text style={{fontSize: 20, fontWeight: '600', textDecorationLine: 'underline',color: '#721a42'}}>Trignometry formulars</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.angle} source={angle} />
            </View>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Sin<>&#952; = Perpendicular/Hypotenuse</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Cos<>&#952; = Base/Hypotenuse</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Tan<>&#952; = Perpendicular/Base</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Sec<>&#952; = Hypotenuse/Base</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>CoSec<>&#952; = Hypotenuse/Perpendicular</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Cot<>&#952; = Base/Perpendicular</></Text>
            <View style={{alignItems:'center', marginTop: 10}}>
               <Text style={{fontSize: 20,color: '#721a42'}}>AREA OF PLANE SHAPES</Text>
            </View>
            <Text style={styles.name}>TRIANGLE:</Text>
            <View>
                <Image source={triangle} style={styles.rightangle}/>
            </View>
            <Text style={styles.name}>PARALLELOGRAM:</Text>
            <View>
                <Image source={parallelogram} style={styles.parallel}/>
            </View>
            <Text style={styles.name}>RHOMBUS:</Text>
            <View>
                <Image source={rhombus} style={styles.rhombus}/>
            </View>
            <Text style={styles.name}>RECTANGLE:</Text>
            <View>
                <Image source={rectangle} style={styles.rightangle}/>
            </View>
            <Text style={styles.name}>SQUARE:</Text>
           <View>
                <Image source={square} style={styles.square}/>
            </View>
            <Text style={styles.name}>TRAPEZOID:</Text>
            <View>
                <Image source={trapezoid} style={styles.trapezoid}/>
            </View>
            <Text style={styles.name}>CIRCLE:</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{marginHorizontal: 10, fontSize: 20}}>Area = <>&#x3C0;</>r&#178;</Text>
                <Text style={{fontSize: 20}}>Circumference = 2&#x3C0;r = &#x3C0;d</Text>
            </View>
            <View>
                <Image source={round} style={styles.circle}/>
            </View>
            <Text style={styles.name}>ELLIPSE:</Text>
            <Text style={{fontSize: 20, marginLeft: 15}}>Area = &#x3C0;ab</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 10, fontSize: 20}}>a = 1/2 minor axis</Text>
                <Text style={{fontSize: 20}}>b = 1/2 major axis</Text>
            </View>
            <View>
                <Image source={elipse} style={styles.rightangle}/>
           </View>
            <View style={{marginLeft: 5, marginBottom: 10}}>
                <View style={{alignItems:'center', marginBottom: 9}}>
                   <Text style={{fontSize: 20,color: '#721a42'}}>3D SHAPES</Text>
                </View>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cube :</Text> Surface area = 6a&#178; where a = The length of the edge</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Rectangular prism :</Text> Surface area = 2(WL + HL + HW) where l = length, W = width, h = height</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cylinder:</Text> Surface Area = 2<>&#x3C0;(r + h) where r = radius of circular base h= slant height</></Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cone:</Text> Surface Area = <>&#x3C0;</>(r + l) where r = radius of circular base and l = slant height</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Sphere:</Text> surface area: 4<>&#x3C0;</>r&#178; where r = radius of sphere</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Hemisphere:</Text> surface area: 3<>&#x3C0;r&#178; where r = radius of hemisphere</></Text>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 20,color: '#721a42', marginVertical: 9}}>VOLUME</Text>
                </View>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cube:</Text> V = s&#179; where s = side</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Rectangular prism :</Text> V = b &#215; h</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cylinder:</Text> V = &#x3C0;r&#178; &#215; h where r = radius, h= height</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Cone(or pyramid):</Text> V = 1/3b &#215; h where b = base, h = height</Text>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Sphere:</Text> V = 4/3&#x3C0;r&#179; where r = radius</Text>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: '#721a42', marginVertical: 9}}>PHYSICS</Text>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Density:</Text> P = mv where m = mass, v = volume</Text>
                    <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Power:</Text> P = Wt where w = work, t = time</Text>
                    <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>weight:</Text> W = mg where m = mass, g= acceleration due to gravity</Text>
                    <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Pressure:</Text> P = FA where F = force, A = Area</Text>
                    <Text style={{marginBottom: 5}}><Text style={{fontWeight: '600'}}>Ohms law:</Text> V = IR where I= current, R = resistance, V = volts</Text>
                </View>
            </View>
          </View>
        </ScrollView>
            
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        width: '100%',
        marginTop: StatusBar.currentHeight
    },
    trapezoid: {
        height: 320,
        width: '100%'
    },
    parallel:{
       width: vw(90),
       height: 250
    },
    rhombus:{
       width: vw(100),
       height: 300
    },
    rightangle: {
        width: '100%',
        height: 300
    },
    square: {
        width: '100%',
        height: 400
    },
    angle: {
        width: '100%',
        height: 300,
    },
    para: {
        width:'100%',
        height: 300
    },
    circle: {
        width:'100%',
        height: 230
    },
    name: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 15,
        textDecorationLine: 'underline'
    }
})