import * as React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

export default function FormulaScreen() {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>Some mathematical formulars for your calculations;</Text>
            </View>
            <View style={{alignItems: 'center'}}>
               <Text style={{fontSize: 20, fontWeight: 500}}>Trignometry formulars</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
              <Image style={styles.rightangle} source={require('../Shapes/righttriangle.png')} />
            </View>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Sin<>&#952; = Perpendicular/Hypotenuse</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Cos<>&#952; = Base/Hypotenuse</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Tan<>&#952; = Perpendicular/Base</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Sec<>&#952; = Hypotenuse/Base</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>CoSec<>&#952; = Hypotenuse/Perpendicular</></Text>
            <Text style={{paddingLeft: 10, marginBottom: 5}}>Cot<>&#952; = Base/Perpendicular</></Text>
            <View style={{alignItems:'center'}}>
               <Text style={{fontSize: 20}}>AREA OF PLANE SHAPES</Text>
            </View>
            <Text style={{fontWeight: 600}}>TRIANGLE:</Text>
            {/*<View>
                <Image source={require('../shapes/square.png')} style={styles.rightangle}/>
            </View>*/}
            <Text style={{fontWeight: 600}}>PARALLELOGRAM:</Text>
            <View>
                <Image source={require('../shapes/parallelogram.png')} style={styles.para}/>
            </View>
            <View>
                <Image source={require('../shapes/rhombus.png')} style={styles.para}/>
            </View>
            <View>
                <Image source={require('../shapes/rectangle.png')} style={styles.para}/>
            </View>
            <View>
                <Image source={require('../shapes/square.png')} style={styles.para}/>
            </View>
            <View>
                <Image source={require('../shapes/trapezoid.png')} style={styles.para}/>
            </View>
            <View>
                <Image source={require('../shapes/circle.png')} style={styles.circle}/>
                <Text>Area = &#x3C0;r&#178; Circumference = 2&#x3C0;r = &#x3C0;d</Text>
            </View>
            <View>
                <Image source={require('../shapes/elipse.png')} style={styles.para}/>
                <Text style={{marginBottom: 10}}>Area = &#x3C0;ab where a = 1/2 minor axis and b = 1/2 major axis</Text>
            </View>
            <View style={{marginLeft: 5}}>
                <View style={{alignItems:'center'}}>
                   <Text style={{fontSize: 20}}>3D SHAPES</Text>
                </View>
                <Text style={{marginBottom: 5}}>CUBE: Surface area = 6a&#178; where a = The length of the edge</Text>
                <Text style={{marginBottom: 5}}>RECTANGULAR PRISM: Surface area = 2(WL + HL + HW) where l = length, W = width, h = height</Text>
                <Text style={{marginBottom: 5}}>CYLINDER: Surface Area = 2<>&#x3C0;(r + h) where r = radius of circular base h= slant height</></Text>
                <Text style={{marginBottom: 5}}>CONE: Surface Area = <>&#x3C0;</>(r + l) where r = radius of circular base and l = slant height</Text>
                <Text style={{marginBottom: 5}}>SPHERE: surface area: 4<>&#x3C0;</>r&#178; where r = radius of sphere</Text>
                <Text style={{marginBottom: 5}}>HEMISPHERE: surface area: 3<>&#x3C0;r&#178; where r = radius of hemisphere</></Text>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 20}}>VOLUME</Text>
                </View>
                <Text style={{marginBottom: 5}}><Text style={{fontWeight: 600}}>CUBE:</Text> v = s&#179; where s = side</Text>
                <Text style={{marginBottom: 5}}>Regular prism: V = b &#215; h</Text>
                <Text style={{marginBottom: 5}}>Cylinder: V = &#x3C0;r&#178; &#215; h where r = radius, h= height</Text>
                <Text style={{marginBottom: 5}}>Cone(or pyramid): V = 1/3b &#215; h where b = base, h = height</Text>
                <Text style={{marginBottom: 5}}>Sphere: V = 4/3&#x3C0;r&#179; where r = radius</Text>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>PHYSICS</Text>
                </View>
                <Text style={{marginBottom: 5}}>Density: p = mv where m = mass, v = volume</Text>
                <Text style={{marginBottom: 5}}>Power: p = Wt where w = work, t = time</Text>
                <Text style={{marginBottom: 5}}>weight: w = mg where m = mass, g= acceleration due to gravity</Text>
                <Text style={{marginBottom: 5}}>Pressure: P = FA where F = force, A = Area</Text>
                <Text style={{marginBottom: 5}}>Ohms law: V = IR where I= current, R = resistance, V = volts</Text>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    rightangle: {
        width: '100%',
        height: 200
    },
    para: {
        width:'100%',
        height: 300
    },
    circle: {
        width:'100%',
        height: 230
    }
})