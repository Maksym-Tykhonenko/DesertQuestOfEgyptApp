import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  Quest,
  QuestComplete,
  Welcome,
  Quiz,
  SettingsModal,
} from './Screens';
import {
  boxIcon,
  homeIcon,
  menuIcon,
  settingsIcon,
  questIcon,
  homeActiveIcon,
  questActiveIcon,
  settingsActiveIcon,
  boxActiveIcon,
} from './assets';
import {Image, View} from 'react-native';
import styles from './styles';
import {Quest2} from './Screens/Quest2';
import {Collection} from './Screens/Collection';
import {CollectItems} from './Screens/CollectItems';
import {QuizComplete} from './Screens/QuizComplete';
import {CollectComplete} from './Screens/CollectComplete';
import {PathsScreen} from './Screens/Paths';
import {Quest2Complete} from './Screens/Quest2Complete';
import {Task3} from './Screens/Task3';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ProfileScreen} from './Screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBarIcon = (focused: boolean, route: any) => {
  let iconName;
  switch (route.name) {
    case 'home':
      iconName = focused ? homeActiveIcon : homeIcon;
      break;
    case 'settings':
      iconName = focused ? settingsActiveIcon : settingsIcon;
      break;
    case 'menu':
      iconName = focused ? menuIcon : menuIcon;
      break;
    case 'collect':
      iconName = focused ? questActiveIcon : questIcon;
      break;
    case 'box':
      iconName = focused ? boxActiveIcon : boxIcon;
      break;
    default:
      iconName = null;
  }
  return (
    <View style={styles.iconView}>
      <Image
        style={route.name === 'menu' ? styles.imageBig : styles.image}
        source={iconName}
        resizeMode="contain"
      />
    </View>
  );
};

const QuizStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quest"
        component={Quest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quest2"
        component={Quest2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CollectItems"
        component={CollectItems}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="questComplete"
        component={QuestComplete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="quizComplete"
        component={QuizComplete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="collectComplete"
        component={CollectComplete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Paths"
        component={PathsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Task3"
        component={Task3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="quest2Complete"
        component={Quest2Complete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainBottomTabStackScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');
  const [lastSelectedTab, setLastSelectedTab] = useState('home');

  const handleSettingsPress = () => {
    setLastSelectedTab(selectedTab);
    setModalVisible(true);
    setSelectedTab('settings');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTab(lastSelectedTab);
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({route}) => {
          return {
            tabBarIcon: () => {
              const isFocused = selectedTab === route.name;
              return renderTabBarIcon(isFocused, route);
            },

            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#302019',
              paddingTop: 20,
              paddingBottom: 32,
              borderTopWidth: 0,
            },
          };
        }}>
        <Tab.Screen
          name="home"
          component={QuizStackScreen}
          options={{headerShown: false, tabBarLabel: () => null}}
          listeners={{
            tabPress: () => {
              setSelectedTab('home');
            },
          }}
        />
        <Tab.Screen
          name="settings"
          component={QuizStackScreen}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              handleSettingsPress();
            },
          }}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="menu"
          component={HomeScreen}
          options={{headerShown: false, tabBarLabel: () => null}}
          listeners={{
            tabPress: () => {
              setSelectedTab('menu');
            },
          }}
        />
        <Tab.Screen
          name="collect"
          component={CollectItems}
          options={{headerShown: false, tabBarLabel: () => null}}
          listeners={{
            tabPress: () => {
              setSelectedTab('collect');
            },
          }}
        />
        <Tab.Screen
          name="box"
          component={Collection}
          options={{headerShown: false, tabBarLabel: () => null}}
          listeners={{
            tabPress: () => {
              setSelectedTab('box');
            },
          }}
        />
      </Tab.Navigator>

      <SettingsModal visible={modalVisible} onClose={handleCloseModal} />
    </>
  );
};

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
    
  }, []);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={MainBottomTabStackScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
