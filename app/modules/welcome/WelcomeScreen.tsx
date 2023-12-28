import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Image, ImageBackground, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Slider from 'react-native-slide-to-unlock';
import {Images} from '../../assets';
import {styles} from './WelcomeScreenStyles';

const WelcomeScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const navigateToMenu = (): void => {
    navigation.navigate('Menu');
  };

  return (
    <ImageBackground
      source={Images.welcomeBg}
      style={styles.screen}
      resizeMode="cover">
      <Animatable.View style={styles.appTitleView} animation={'zoomIn'}>
        <Text style={styles.appTitle1}>Learning for Kids</Text>
        <Text style={styles.appTitle2}>Made Easy</Text>
      </Animatable.View>
      <Slider
        onEndReached={navigateToMenu}
        containerStyle={styles.sliderContainer}
        sliderElement={
          <Image style={styles.sliderImage} source={Images.car} />
        }>
        <Text style={styles.sliderText}>
          Slide <Text style={styles.yellowSliderText}>To </Text>
          <Text style={styles.pinkSliderText}>Start!</Text>
        </Text>
      </Slider>
    </ImageBackground>
  );
};

export default WelcomeScreen;
