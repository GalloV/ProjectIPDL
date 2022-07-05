import React, { useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground, TouchableNativeFeedback, Button, TouchableWithoutFeedbackComponent, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import StatisticScreen from '../screens/StatisticScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';
import ClassControlPanel from './ClassControlPanel';

const Tab = createBottomTabNavigator();

const StatisticBarButton = ({children, onPress}) => (
    <TouchableNativeFeedback
    onPress={onPress}
    style={{
    }}
    >
        <View
        style={{
            width:50,
            height:53,
            borderRadius:35,
            top:-20,
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            {children}
        </View>
    </TouchableNativeFeedback>
)

function BottomBar(props) {
    const activate = useRef()
    const activatePanel = () => {
        activate.current.changeState()
    }
    const deactivatePanel = () => {
        activate.current.deactivatePanel()
    }
    return (
            <View style={{flex:1,}}>
                <TouchableWithoutFeedback onPress={deactivatePanel}>
                    <View style={{flex:1,}}>
                        <Tab.Navigator 
                        screenOptions={{ 
                            headerShown: false,
                            tabBarShowLabel:false,
                            tabBarStyle:{
                            },
                            tabBarBackground:() => (
                                <Image 
                                style={{width:"100%", height:"100%"}}
                                source={require("../Images/bottomBarIcon/bottomBar.png")} />
                            ),
                            }}> 
                            <Tab.Screen name='Home' children={()=><HomeScreen panelActivation={activatePanel} />} 
                            options={{
                                tabBarIcon:({focused}) => (
                                    <View style={{
                                        borderRadius:10,
                                        width:30, 
                                        height:27, 
                                        justifyContent:"center", 
                                        alignItems:"center",
                                        }}>
                                        <Image 
                                        style={{tintColor: focused ? "#fff" : "#72CEE4"}}
                                        resizeMode='contain'
                                        source={require('../Images/bottomBarIcon/home.png')}
                                        />
                                    </View>
                                ),
                            }} />
                            <Tab.Screen name='Find' children={()=><HomeScreen panelActivation={activatePanel} />}
                                        options={{
                                            tabBarIcon:({focused}) => (
                                                <View style={{
                                                    borderRadius:10,
                                                    width:30, 
                                                    height:27, 
                                                    justifyContent:"center", 
                                                    alignItems:"center"}}>
                                                    <Image 
                                                    style={{tintColor: focused ? "#fff" : "#72CEE4"}}
                                                    resizeMode='contain'
                                                    source={require('../Images/bottomBarIcon/searchIcon.png')}
                                                    />
                                                </View>
                                            ),
                                        }}
                            />
                            <Tab.Screen name='Statistique' component={StatisticScreen}
                            options={{
                                tabBarIcon: ({focused}) => {
                                    if(focused) {
                                        return (<Image 
                                            resizeMode='contain'
                                            source={require('../Images/bottomBarIcon/selectedStat.png')}
                                            style={{
                                                width:50,
                                                height:70,
                                            }}
                                            />)
                                    } else {
                                        return (
                                            <Image 
                                    resizeMode='contain'
                                    source={require('../Images/bottomBarIcon/statIcon.png')}
                                    style={{
                                        width:50,
                                        height:70,
                                    }}
                                    />
                                        )
                                    }
                                }, 
                                tabBarButton:(props) => (
                                    <StatisticBarButton {...props} />
                                )
                            }}
                            /> 
                            <Tab.Screen name='Notification' component={NotificationScreen}
                                        options={{
                                            tabBarIcon:({focused}) => (
                                                <View style={{
                                                    borderRadius:10,
                                                    width:30, 
                                                    height:27, 
                                                    justifyContent:"center", 
                                                    alignItems:"center"}}>
                                                    <Image 
                                                    style={{tintColor: focused ? "#fff" : "#72CEE4"}}
                                                    resizeMode='contain'
                                                    source={require('../Images/bottomBarIcon/notifcation.png')}
                                                    />
                                                </View>
                                            ),
                                        }}
                            />
                            <Tab.Screen name='Message' component={MessageScreen} 
                                        options={{
                                            tabBarIcon:({focused}) => (
                                                <View style={{
                                                    borderRadius:10,
                                                    width:30, 
                                                    height:27, 
                                                    justifyContent:"center", 
                                                    alignItems:"center"}}>
                                                    <Image 
                                                    style={{tintColor: focused ? "#fff" : "#72CEE4"}}
                                                    resizeMode='contain'
                                                    source={require('../Images/bottomBarIcon/message.png')}
                                                    />
                                                </View>
                                            ),
                                        }}
                            />
                        </Tab.Navigator>
                    </View>
                </TouchableWithoutFeedback>
                <ClassControlPanel ref={activate} />
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:70,
        width:"100%",
        backgroundColor:"red",
    },
    backgroudImage:{
        width:"100%",
    }
})

export default BottomBar;