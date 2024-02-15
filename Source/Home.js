import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Home() {

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
          <Image source={require('./assets/ios-settings-5-5121.png')} style={{ width: 30, height: 30 }} />
        </View>
        <ScrollView style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#202640', padding: 10, justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 16, color: '#FF2C2C' }}>Only on Music 1 </Text>
              <Text style={{ fontSize: 13, color: '#fff' }}>100 Songs Free at just Rs. 99/year </Text>
            </View>
            <TouchableOpacity style={{ borderWidth: 2, borderColor: '#FF2C2C', backgroundColor: '#D9D9D9', paddingHorizontal: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center',height:30 }}>
              <Text style={{ fontSize: 15, color: '#000', fontWeight: 'bold' }}>Click Now </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <ImageBackground
              source={require('./assets/Rectangle-31.png')}
              resizeMode="stretch"
              style={{
                height: 150,
                width: "100%",
                marginTop: 10,


              }}>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 22, color: '#fff', fontWeight: '600', textAlign: 'center' }}>Get 1-Month <Text style={{ color: '#DB0946' }}>Music 1 </Text>
                  For Free Trial Now</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 15 }}>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: '#fff', backgroundColor: '#DB0946', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>Subscribe  Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: '#fff', backgroundColor: '#DB0946', paddingHorizontal: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>Play Free Song </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            {/* Trending Song */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Trending Songs </Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>View All {">"}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View>
                  <Image source={require('./assets/Rectangle-34.png')} style={{ width: 100, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff' }}>Billi Billi Song 2020</Text>
                  <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/Rectangle-35.png')} style={{ width: 100, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff' }}>English Song 2023</Text>
                  <Text style={{ fontSize: 8, color: '#fff' }}>Rabbar huuk kyani devil... </Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/Rectangle-36.png')} style={{ width: 100, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff' }}>Daang Daang 2022</Text>
                  <Text style={{ fontSize: 8, color: '#fff' }}>Lavita Lobo and Nakash Aziz</Text>
                </View>
              </View>
            </View>
            {/* Top Playlist */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Top Playlists </Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>View All {">"} </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View >
                  <Image source={require('./assets/image-10.png')} style={{ width: 105, height: 100 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Best Of Udit...</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Image source={require('./assets/image-11.png')} style={{ width: 105, height: 100 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Best Love Of Alka..</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Image source={require('./assets/image-12.png')} style={{ width: 105, height: 100 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Best Sidhu Moose..</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
              </View>
            </View>
            {/* Sad Song */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Sad Songs </Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>View All {">"} </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View >
                  <Image source={require('./assets/image-13.png')} style={{ width: 105, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Pyaar Me dhoka</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/image-14.png')} style={{ width: 105, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Dil Tod ke hasti ho</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/image-15.png')} style={{ width: 105, height: 90 }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Breakup song</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
              </View>
            </View>
            <ImageBackground
              source={require('./assets/image-17.png')}
              resizeMode="stretch"
              style={{
                height: 150,
                width: "100%",
                marginTop: 10,
                backgroundColor: '#fff',
                borderRadius: 20

              }}>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Creating your Playlist Just got easier
                  with just 2 steps!</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
                  <View>
                    <Text style={{ fontSize: 16, color: '#000' }}>1. Name  your  Playlist.</Text>
                    <Text style={{ fontSize: 13, color: '#000' }}>2. Add your favorite songs.</Text>
                  </View>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: '#fff', backgroundColor: '#DB0946', paddingHorizontal: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>Play Free Song </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            {/* Romance song  */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>Romance Songs </Text>
                <Text style={{ fontSize: 13, color: '#fff' }}>View All {">"} </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View >
                  <Image source={require('./assets/image-18.png')} style={{ width: 100, height: 95, }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Love Hits</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/image-19.png')} style={{ width: 100, height: 95, }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Iconic Love Hits</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Image source={require('./assets/image-20.png')} style={{ width: 100, height: 95, }} />
                  <Text style={{ fontSize: 11, color: '#fff', paddingTop: 5 }}>Romantic Hits</Text>
                  {/* <Text style={{ fontSize: 8, color: '#fff' }}>Ferhad Feyssal, Yazan... </Text> */}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}