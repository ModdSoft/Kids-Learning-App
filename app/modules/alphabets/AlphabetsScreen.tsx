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
import {styles} from './AlphabetsScreenStyles';

type AlphabetItem = {
  title: string;
  text: string;
};

const AlphabetModal = ({
  visible,
  item,
  backgroundColor,
  toggleModalVisibility,
}: {
  visible: boolean;
  item: AlphabetItem;
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

const AlphabetCard = ({item, index}: {item: AlphabetItem; index: number}) => {
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
  const backgroundColor = colors[index % colors.length];

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.learnCard, {backgroundColor}])}
      activeOpacity={0.7}
      onPress={toggleModalVisibility}>
      <Text style={styles.learnCardText}>{item.title}</Text>
      <AlphabetModal
        visible={isModalVisible}
        item={item}
        backgroundColor={backgroundColor}
        toggleModalVisibility={toggleModalVisibility}
      />
    </TouchableOpacity>
  );
};

const AlphabetsScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const alphabetsArray = [
    {title: 'A', text: 'A for Apple'},
    {title: 'B', text: 'B for Ball'},
    {title: 'C', text: 'C for Cat'},
    {title: 'D', text: 'D for Dog'},
    {title: 'E', text: 'E for Ear'},
    {title: 'F', text: 'F for Fish'},
    {title: 'G', text: 'G for Giraffe'},
    {title: 'H', text: 'H for Horse'},
    {title: 'I', text: 'I for Igloo'},
    {title: 'J', text: 'J for Jar'},
    {title: 'K', text: 'K for Kite'},
    {title: 'L', text: 'L for Lion'},
    {title: 'M', text: 'M for Monkey'},
    {title: 'N', text: 'N for Nest'},
    {title: 'O', text: 'O for Orange'},
    {title: 'P', text: 'P for Panda'},
    {title: 'Q', text: 'Q for Queen'},
    {title: 'R', text: 'R for Rainbow'},
    {title: 'S', text: 'S for Sun'},
    {title: 'T', text: 'T for Tiger'},
    {title: 'U', text: 'U for Umbrella'},
    {title: 'V', text: 'V for Violin'},
    {title: 'W', text: 'W for Whale'},
    {title: 'X', text: 'X for Xylophone'},
    {title: 'Y', text: 'Y for Yak'},
    {title: 'Z', text: 'Z for Zebra'},
  ];
  const navigateBack = () => navigation.goBack();

  return (
    <ImageBackground source={Images.learnBg} style={styles.screen}>
      <TouchableOpacity style={styles.backArrow} onPress={navigateBack}>
        <Image source={Icons.backArrow} style={styles.backArrowIcon} />
      </TouchableOpacity>
      <FlatList
        data={alphabetsArray}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return <AlphabetCard {...{item, index}} />;
        }}
      />
    </ImageBackground>
  );
};

export default AlphabetsScreen;
