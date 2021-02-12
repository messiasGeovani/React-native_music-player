import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default {
  statusBarHeight: Constants.statusBarHeight,
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height - Constants.statusBarHeight,
};
