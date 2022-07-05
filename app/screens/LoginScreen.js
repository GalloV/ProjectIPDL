import React from 'react';
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CardView from 'react-native-cardview';


function LoginScreen(props) {
    return (
        <ImageBackground source={require("../Images/logo.png")} style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder='Username' style={styles.usernameInput} />
                <TextInput placeholder='Password' style={styles.usernameInput} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={["#00A6CE", "#6E72C5"]} style={styles.grandient}>
                        <Text style={styles.buttonText}>Connect</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 100,
        height: 45,
    },  
    buttonContainer:{
        width:"100%",
        height:150,
        backgroundColor:"#fff",
        display:"flex",
        alignItems:"center",
    },
    buttonText : {
        color:"#fff"
    },
    container : {
        flex:1,
        display:"flex",
        justifyContent:"flex-end",
    },
    form:{
        height:230,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    forgotPasswordText:{
        top:50,
        left:2,
        flex:1,
    }
    ,
    grandient: {
        flex:1,
        display : "flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    usernameInput:{
        backgroundColor:"#FFF",
        width:280,
        height:60,
        borderRadius:10,
        shadowColor:"black",
        elevation:4,
        paddingLeft:10
    },
   
})

export default LoginScreen;