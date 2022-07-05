import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel'
import ClassControlPanel from '../Component/ClassControlPanel';



function HomeScreen(props) {
        const [selected, setSelected] = useState(false)
        const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "white",
            alignItems: 'center',
            justifyContent: 'center'
          },
        dragHandler:{
            alignSelf:"self",
            height:64,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"red"
        },
        panel :{
            backgroundColor:"red",
            width:"100%",
        }
    })

    const buttonRef = useRef()
    return (
        <View style={styles.container}>
            <View>
                <Text>Homecoming</Text>
                <Button onPress={() => {
                    props.panelActivation()
                }} title='Click me' />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    }
})

export default HomeScreen;