import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tts from 'react-native-tts';
import {Icons, Images} from '../../assets';
import {themeColors} from '../../theme';
import {styles} from './NumbersScreenStyles';

type NumberItem = {
  title: number;
  text: string;
};

const NumberModal = ({
  visible,
  item,
  backgroundColor,
  toggleModalVisibility,
}: {
  visible: boolean;
  item: NumberItem;
  backgroundColor: themeColors;
  toggleModalVisibility: () => void;
}) => {
  useEffect(() => {
    if (visible) {
      Tts.getInitStatus().then(() => {
        Tts.setDefaultRate(0.3);
        Tts.setDucking(true);
        Tts.speak(item.text);
      });
    }
  }, [visible]);

  const handlePlayButton = () => {
    Tts.speak(item.text);
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal}>
        <View
          style={StyleSheet.flatten([
            styles.modalContentContainer,
            {borderColor: backgroundColor},
          ])}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={toggleModalVisibility}>
            <Image source={Icons.close} style={styles.closeModalIcon} />
          </TouchableOpacity>
          <Text style={[styles.modalTitle, {color: backgroundColor}]}>
            {item.title}
          </Text>
          <Text style={[styles.modalText, {color: backgroundColor}]}>
            {item.text}
          </Text>
          <TouchableOpacity
            style={styles.modalPlayButton}
            onPress={handlePlayButton}>
            <Image source={Icons.play} style={styles.modalPlayIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const NumberCard = ({item, index}: {item: NumberItem; index: number}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const colors = [
    themeColors.electricBlue,
    themeColors.brownOrange,
    themeColors.darkYellow,
    themeColors.green,
    themeColors.primary,
    themeColors.ultraRed,
    themeColors.maroon,
    themeColors.purple,
    themeColors.navyBlue,
    themeColors.secondary,
  ];
  const backgroundColor = colors[index];

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.learnCard, {backgroundColor}])}
      activeOpacity={0.7}
      onPress={toggleModalVisibility}>
      <Text style={styles.learnCardText}>{item.title}</Text>
      <NumberModal
        visible={isModalVisible}
        item={item}
        backgroundColor={backgroundColor}
        toggleModalVisibility={toggleModalVisibility}
      />
    </TouchableOpacity>
  );
};

const NumbersScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const numbersArray: NumberItem[] = [
    {title: 0, text: 'ZERO'},
    {title: 1, text: 'ONE'},
    {title: 2, text: 'TWO'},
    {title: 3, text: 'THREE'},
    {title: 4, text: 'FOUR'},
    {title: 5, text: 'FIVE'},
    {title: 6, text: 'SIX'},
    {title: 7, text: 'SEVEN'},
    {title: 8, text: 'EIGHT'},
    {title: 9, text: 'NINE'},
  ];

  const navigateBack = () => navigation.goBack();

  return (
    <ImageBackground source={Images.learnBg} style={styles.screen}>
      <TouchableOpacity style={styles.backArrow} onPress={navigateBack}>
        <Image source={Icons.backArrow} style={styles.backArrowIcon} />
      </TouchableOpacity>
      <FlatList
        data={numbersArray}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <NumberCard {...{item, index}} />;
        }}
      />
    </ImageBackground>
  );
};

export default NumbersScreen;
