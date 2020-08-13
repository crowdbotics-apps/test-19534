import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps90131Navigator from '../features/Maps90131/navigator';
import Settings90109Navigator from '../features/Settings90109/navigator';
import Settings90094Navigator from '../features/Settings90094/navigator';
import NotificationList90093Navigator from '../features/NotificationList90093/navigator';
import Maps90092Navigator from '../features/Maps90092/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps90131: { screen: Maps90131Navigator },
Settings90109: { screen: Settings90109Navigator },
Settings90094: { screen: Settings90094Navigator },
NotificationList90093: { screen: NotificationList90093Navigator },
Maps90092: { screen: Maps90092Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
