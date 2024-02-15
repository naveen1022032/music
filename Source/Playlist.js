import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-linear-gradient';


export default function Playlist() {

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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 10, elevation: 5, }}>
          <Image source={require('./assets/image_processing20210620-28232-t1xm2b5.png')} style={{ width: 25, height: 25 }} />
          <Text style={{ fontSize: 25, color: '#fff' }}>Playing List</Text>
          {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
        </View>
        <ScrollView style={{ padding: 10 }}>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
          <LinearGradient colors={["rgba(96, 42, 111, 1)", "rgba(37, 37, 66, 1)"]} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13, borderRadius: 10, padding: 10,marginTop:10
          }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flexDirection:'row',}}>
              <Image source={require('./assets/image-22.png')} style={{ width: 50, height: 50 }} />
              <View style={{marginLeft:10}}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Ham yaar hai tumahare song</Text>
                <Text style={{ fontSize: 12, color: '#fff' }}>Kisor Kumar </Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/love_31417384.png')} style={{width: 30, height: 30}} />
            {/* <Image source={require('./assets/Group-70.png')} style={{}} /> */}
            </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}