/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {NumbersScreen} from './app/modules';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => NumbersScreen);
