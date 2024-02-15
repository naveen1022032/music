// // App.js
// // import React, { Component } from 'react';
// // import { Animated,View,Text,Image } from 'react-native';

// // // const BackgroundCounter = NativeModules.BackgroundCounter;

// // export default class App extends Component {
// //   constructor() {
// //     super();
// //     this.animatedValue = new Animated.Value(0);
// //     this.textAnimationValue = new Animated.Value(0);
// //   }
// //   componentDidMount() {
// //     Animated.timing(this.animatedValue, {
// //       toValue: 1,
// //       duration: 2000, // Animation duration in milliseconds
// //       useNativeDriver: false, // Set this to true for better performance on newer versions of React Native
// //     }).start();

// //     Animated.timing(this.textAnimationValue, {
// //       toValue: 1,
// //       duration: 1000, // Animation duration in milliseconds
// //       useNativeDriver: false, // Set this to true for better performance on newer versions of React Native
// //     }).start();
// //   }

// //   // componentDidMount() {
// //   //   // Event listener for counter updates
// //   //   DeviceEventEmitter.addListener('counterUpdated', (counterValue) => {
// //   //     console.log(`Counter Value: ${counterValue}`);
// //   //   });

// //   //   // Start the background counter when the app goes into the background
// //   //   AppState.addEventListener('change', (nextAppState) => {
// //   //     if (nextAppState === 'background') {
// //   //       BackgroundCounter.startBackgroundCounter();
// //   //     }
// //   //   });
// //   // }

// //   render() {
// //     const marginLeft = this.animatedValue.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [-200, 0], // Adjust the initial position and ending position as needed
// //     });
// //     const marginLeft1 = this.textAnimationValue.interpolate({
// //       inputRange: [0, 1],
// //       outputRange: [-200, 0], // Adjust the initial position and ending position as needed
// //     });

// //     return (
// //       // Your app's main component content
// //       <View>
// //  <Image 
// //             style ={{width: "100%", height:"80%"}} 
// //             source={{ uri : "https://media.geeksforgeeks.org/wp-content/uploads/20220221170632/ezgifcomgifmaker1.gif"}} 
// //           /> 
// //            <Animated.Text
// //         style={{
// //           marginLeft,fontSize:30
// //         }}
// //       >
// //         Hii This is animation 
// //       </Animated.Text>
// //       <View>
// //         <Animated.Text style={{ marginLeft1 }}>
// //           Your Right-to-Left Text Goes Here
// //         </Animated.Text>
// //       </View>
// //       </View>
// //     );
// //   }
// // }


// // import React, { Component } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import { startBackgroundService, stopBackgroundService } from './BackgroundSpeechModule';

// // class App extends Component {
// //   startService = () => {
// //     startBackgroundService();
// //   }

// //   stopService = () => {
// //     stopBackgroundService();
// //   }

// //   render() {
// //     return (
// //       <View>
// //         <Button title="Start Service" onPress={this.startService} />
// //         <Button title="Stop Service" onPress={this.stopService} />
// //       </View>
// //     );
// //   }
// // }

// // export default App;


// import React, { Component } from 'react';
// import { Animated, View, Text, Image, Button } from 'react-native';
// import { AnimatedSVGPath } from "react-native-svg-animations";
// import Svg, { Circle } from "react-native-svg"
// // import SvgUri from 'react-native-svg-uri';
// import Loader from "./Screen/Loader";


// const d = "M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
// export default class App extends Component {
//   constructor() {
//     super();
//     this.animatedValueLeft = new Animated.Value(0); // For left-to-right animation
//     this.animatedValueRight = new Animated.Value(0); // For right-to-left animation
//   }

//   componentDidMount() {
//     // Left-to-right animation
//     Animated.timing(this.animatedValueLeft, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: false,
//     }).start();

//     // Right-to-left animation
//     Animated.timing(this.animatedValueRight, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: false,
//     }).start();
//   }

//   render() {
//     const marginLeftLeft = this.animatedValueLeft.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-200, 0],
//     });
//     const opacity = this.animatedValueLeft.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 1],
//     });
//     const translateX = this.animatedValueLeft.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-100, 0],
//     });

//     const transform = [{ translateX }];
//     const marginLeftRight = this.animatedValueRight.interpolate({
//       inputRange: [0, 1],
//       outputRange: [200, 0],
//     });

//     const opacityRight = this.animatedValueRight.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 1],
//     });
//     const translateXRight = this.animatedValueRight.interpolate({
//       inputRange: [0, 1],
//       outputRange: [100, 0],
//     });

//     const transformRight = [{ translateX: translateXRight }];

//     return (
//       <View>
//         <View>
//           <AnimatedSVGPath
//             strokeColor={"red"}

//             duration={1000}

//             strokeWidth={10}

//             height={100}

//             width={400}

//             scale={0.75}

//             delay={0}

//             d={d}
//             rewind={true}
//             loop={true}
//             reverse ={true}
//           />
//         </View>
//         {/* <SvgUri
//       width="200"
//       height="200"
//       source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
//     /> */}

// <Loader />
//         {/* <Image
//           style={{ width: "100%", height: "80%" }}
//           source={{
//             uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220221170632/ezgifcomgifmaker1.gif"
//           }}
//         /> */}
//         <View style={{ height: 150, width: 150 }}>
//           <Image
//             style={{ width: "100%", height: "100%" }}
//             source={require('./Screen/animatonimage.gif')} // Replace with your image file path
//           />
//         </View>
//         <Animated.Text
//           style={{
//             marginLeft: marginLeftLeft,
//             fontSize: 20,
//             opacity: opacity,
//             transform: transform
//           }}
//         >
//           Hi, this is a left-to-right animation.
//         </Animated.Text>

//         <Animated.Text
//           style={{
//             marginLeft: marginLeftRight,
//             fontSize: 20,
//             opacity: opacityRight,
//             transform: transformRight
//           }}
//         >
//           right-to-left animation.
//         </Animated.Text>
//         {/* <Button title='Check' onPress={()=>{
//            Animated.timing(this.animatedValueLeft, {
//             toValue: 1,
//             duration: 2000,
//             useNativeDriver: false,
//           }).start();

//           // Right-to-left animation
//           Animated.timing(this.animatedValueRight, {
//             toValue: 1,
//             duration: 2000,
//             useNativeDriver: false,
//           }).start();
//         }}>

//         </Button> */}
//       </View>
//     );
//   }
// }





import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Login() {

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
          <View style={{justifyContent:'center',alignItems:'center',marginTop:100}}>
            <Text style={{fontSize:30,color:'#fff'}}>Welcome to Music 1</Text>
            <Text style={{fontSize:30,color:'#fff',fontWeight:'bold',textAlign:'center',marginTop:20}}>Hi</Text>
            <Text style={{fontSize:30,color:'#fff',textAlign:'center',marginTop:20}}>Lets Get Started</Text>
            <View>
              <Text style={{fontSize:18,color:'#fff',marginTop:40}}>Enter Mobile Number</Text>
              <View style={{flexDirection:'row',marginTop:10}}>
              <View style={{width:55,height:55,backgroundColor:'#202640',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:16,color:'#fff'}}>+91</Text>
              </View>
              <View style={{width:'75%',height:55,backgroundColor:'#202640',justifyContent:'center',alignItems:'flex-start',paddingLeft:10,marginLeft:10}}>
                <TextInput style={{fontSize:16,color:'#fff'}} placeholder='xxx-xxx-xxx'  placeholderTextColor="#fff" />
              </View>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#E92A31',width:'80%',padding:10,justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:5}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Continue</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    </View>
  )
}