import {
  Text,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  TextStyle,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {styles} from './MenuScreenStyles';
import {Images} from '../../assets';
import {Image} from 'react-native-animatable';
import {themeColors} from '../../theme';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useBackgroundMusic} from '../../hooks';

const MenuCard = ({
  menuImage,
  arrowIcon,
  menuText,
  backgroundColor,
  textColor,
  alternateTextColor,
  onPress,
}: {
  menuImage: ImageSourcePropType;
  arrowIcon: ImageSourcePropType;
  menuText: string;
  backgroundColor: themeColors;
  textColor: themeColors;
  alternateTextColor: themeColors;
  onPress: () => void;
}) => {
  const text = menuText.split(' ');
  const dynamicCardStyle = StyleSheet.flatten([
    styles.menuCard,
    {backgroundColor},
  ]);

  const dynamicTextStyle = StyleSheet.flatten([
    styles.menuCardText,
    {color: textColor},
  ]);

  const alternateTextStyle: TextStyle = {
    color: alternateTextColor,
  };

  useBackgroundMusic();

  return (
    <TouchableOpacity
      style={dynamicCardStyle}
      activeOpacity={0.9}
      onPress={onPress}>
      <Image
        source={menuImage}
        style={styles.menuCardImage}
        resizeMode="contain"
        animation={'tada'}
      />
      <View style={styles.menuCardTextView}>
        <Text style={dynamicTextStyle}>
          {text[0] + ' '}
          <Text style={alternateTextStyle}>{text[1]}</Text>
        </Text>
        <Image source={arrowIcon} style={styles.rightArrow} />
      </View>
    </TouchableOpacity>
  );
};

const MenuScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const navigateToAlphabets = () => {
    navigation.navigate('Alphabets');
  };

  const navigateToNumbers = () => {
    navigation.navigate('Numbers');
  };

  return (
    <ImageBackground source={Images.menuBg2} style={styles.screen}>
      <MenuCard
        menuImage={Images.menuAlphabets}
        arrowIcon={Images.arrows}
        menuText="Learn Alphabets"
        backgroundColor={themeColors.primary}
        textColor={themeColors.ultraRed}
        alternateTextColor={themeColors.yellow}
        onPress={navigateToAlphabets}
      />
      <MenuCard
        menuImage={Images.menuNumbers}
        arrowIcon={Images.yellowArrow}
        menuText="Learn Numbers"
        backgroundColor={themeColors.navyBlue}
        textColor={themeColors.yellow}
        alternateTextColor={themeColors.ultraRed}
        onPress={navigateToNumbers}
      />
    </ImageBackground>
  );
};

export default MenuScreen;
