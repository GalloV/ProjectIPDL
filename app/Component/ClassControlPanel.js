import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, TouchableOpacity, Animated } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel'

const  ClassControlPanel = forwardRef((props,ref) => {
    const [test, setTest] = useState('hello')
    const first = useRef()
    useImperativeHandle(ref, () => ({
        changeState() {
            first.current.show()
        },
        deactivatePanel() {
            first.current.hide()
        }
    }))
    const styles = StyleSheet.create({
        container:{
            width:"100%",
        },

        panel :{
            flex:1,
            zIndex:10,
            backgroundColor:"green",
            width:"100%",
        },
    })
    return (
        <View style={styles.container}>
            <SlidingUpPanel 
            friction={0.3}
            draggableRange={{top:760, bottom:0}}
            ref={first}>
                {dragHandler => (
                    <View style={styles.panel}>
                        <View style={[dragHandler, {
                            backgroundColor:"blue",
                            borderTopLeftRadius:12
                            }]} {...dragHandler}>
                            <Text>Drag handler</Text>
                        </View>
                        <ScrollView>                        
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                            <Text>Here is the content inside panel</Text>
                        </ScrollView>
                    </View>
                )}
            </SlidingUpPanel>
        </View>
    );
})

export default ClassControlPanel;