import React, { useState } from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import SliderBox from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

const App = () => {
  const [images, setImages] = useState([
    'https://static.vecteezy.com/system/resources/thumbnails/007/286/713/small/afro-girl-enjoying-music-wearing-sunglasses-and-headphone-banner-vector.jpg',
    'https://i.ytimg.com/vi/W-fBCnAD3p8/maxresdefault.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4eeb14128744959.615c9742c720a.jpg',
    // Add more image URLs as needed
  ]);
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 10, elevation: 5 }}>
          <Image source={require('./assets/image_processing20210620-28232-t1xm2b5.png')} style={{ width: 25, height: 25 }} />
          <Text style={{ fontSize: 25, color: '#fff' }}>Playing List</Text>
        </View>
        <View>
          <SliderBox
            ImageComponent={FastImage}
            images={images}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
            imageLoadingColor="#2196F3"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
