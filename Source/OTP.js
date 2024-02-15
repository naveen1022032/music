import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import OTPTextView from 'react-native-otp-textinput';


export default function OTP() {

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
         padding:10
        }}>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:150}}>
            <View>
            <Text style={{fontSize:30,color:'#fff',marginTop:20}}>Verify phone Number</Text>
              <Text style={{fontSize:18,color:'#fff',marginTop:20}}>Check your SMS messages. we've sent you the pin at <Text style={{color:'#A091D7'}}>XXX-XXXX-XXX</Text></Text>
              <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}>
              <OTPTextView  inputCount={4} ref={e =>console.log(e,"okk")} textInputStyle={{backgroundColor:'#202543',borderRadius:10,borderBottomWidth:0,color:'#fff'}}/>
              </View>
              <Text style={{fontSize:18,color:'#fff',marginTop:10}}>Didn't receive SMS? <Text style={{color:'#E92A31'}}>Resend Code</Text></Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'#E92A31',width:'80%',padding:10,justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:5}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Verify</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  )
}