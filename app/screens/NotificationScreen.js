import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function NotificationScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default NotificationScreen;