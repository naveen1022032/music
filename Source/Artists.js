import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'


export default function Artists() {

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <ImageBackground
        source={require('./assets/Mask-group.png')}
        resizeMode="stretch"
        style={{
          height: screenHeight,
          width: screenWidth,

        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", borderBottomWidth: 2, borderColor: '#fff', padding: 10, elevation: 5, }}>
          <Text style={{ fontSize: 30, color: '#fff' }}>Music 1</Text>
          <Image source={require('./assets/Untitled-1-3.png')} style={{ width: 30, height: 30 }} />
        </View>
        <ScrollView style={{ padding: 10 }}>
          <Text style={{ fontSize: 28, color: '#fff' }}>Artists For You  </Text>
          <View style={{ marginTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <ImageBackground 
               source={require('./assets/Untitled-2-1.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Hindi</Text>
                </View>
              </ImageBackground>
              <ImageBackground 
               source={require('./assets/s-2.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Sonu Nigam</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <ImageBackground 
               source={require('./assets/alka-1.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Alka Yagnik</Text>
                </View>
              </ImageBackground>
              <ImageBackground 
               source={require('./assets/udit-1.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Udit Narayan</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <ImageBackground 
               source={require('./assets/nena-1.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Neha Kakkar</Text>
                </View>
              </ImageBackground>
              <ImageBackground 
               source={require('./assets/Untitled-2-3.png')}
               resizeMode="stretch"
              style={{ width:160 ,height:160,position:'relative' }}>
                <View style={{ padding: 10,position:'absolute',bottom:-5,alignSelf:'center', }}>
                <Text style={{ fontSize: 11, color: '#fff',}}>Sidhu Moose Wala</Text>
                </View>
              </ImageBackground>
            </View>
          
          </View>
        </ScrollView>
        <Image source={require('./assets/image-2.png')} style={{ width: "100%", height: 60, position: 'absolute', bottom: 0 }} />
      </ImageBackground>
    </View>
  )
}