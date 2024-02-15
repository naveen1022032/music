import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'


export default function Language() {

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
          <Image source={require('./assets/skipbutton.png')} style={{ width: 30, height: 30 }} />
        </View>
        <ScrollView style={{padding:10}}>
          <Text style={{ fontSize: 28, color: '#fff' }}>Choose Language </Text>
          <View style={{marginTop:30}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{backgroundColor:'#E4F2FF',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Hindi</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered-1.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            <View style={{backgroundColor:'#DBF1DB',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>English</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
              <Image source={require('./assets/A.png')} style={{ width: 40, height: 40,alignSelf:'center' }} />
              </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{backgroundColor:'#CA97FA',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Panjabi</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered3.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            <View style={{backgroundColor:'#F7DBD2',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Marathi</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered2.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{backgroundColor:'#FDD2D2',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Telugu</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered5.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            <View style={{backgroundColor:'#FDF2D2',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Gujrati</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered4.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{backgroundColor:'#E4DBDB',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Tamil</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered6.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            <View style={{backgroundColor:'#C7FAE5',width:"48%",height:130,padding:10,borderRadius:10}}>
              <Text style={{ fontSize: 25, color: '#000' }}>Oriya</Text>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
              <Image source={require('./assets/ss-Recovered7.png')} style={{ width: 50, height: 50,alignSelf:'center' }} />
              </View>
            </View>
            </View>
          </View>
        </ScrollView>
        <Image source={require('./assets/image-2.png')} style={{ width: "100%", height: 60,position: 'absolute',bottom:0}} />
      </ImageBackground>
    </View>
  )
}