import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

let guidelineBaseWidth = 375;
let guidelineBaseHeight = 812;

if (width > height) {
  [guidelineBaseWidth, guidelineBaseHeight] = [
    guidelineBaseHeight,
    guidelineBaseWidth,
  ];
}

// Created helper functions for responsiveness
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isPad: Platform.OS === 'ios' && Platform.isPad,
  isTV: Platform.isTV,
};

let osVersion: string = '-1';

if (Platform.OS === 'android') {
  osVersion = Platform.constants.Release;
}

const deviceAndroidVersion = parseInt(osVersion);

export {
  globalMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
  deviceAndroidVersion,
};
